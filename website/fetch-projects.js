#!/usr/bin/env node
/**
 * Fetches project data from the Start.gg Community API Projects Google Sheet
 * and writes it to data/projects.js.
 *
 * Usage: node fetch-projects.js
 * Requires: SHEETS_API_KEY environment variable
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Load .env file if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  });
}

const SHEET_ID = '1OYizwbD1A2Ndcs0TnoMNrNO8hlDtngSgQnfwwc5mfiU';
const API_KEY = process.env.SHEETS_API_KEY;

if (!API_KEY) {
  console.error('Error: SHEETS_API_KEY environment variable is not set.');
  console.error('Usage: SHEETS_API_KEY=your_key node fetch-projects.js');
  process.exit(1);
}

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Failed to parse response: ' + data.slice(0, 200))); }
      });
    }).on('error', reject);
  });
}

function normalizeActive(active) {
  if (!active) return 'Unknown';
  const val = active.toLowerCase();
  if (val === 'yes' || val.startsWith('yes')) return 'Yes';
  if (val === 'no') return 'No';
  return 'Unknown';
}

async function main() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}`
    + `?includeGridData=true`
    + `&fields=sheets(properties(title),data(rowData(values(formattedValue,hyperlink))))`
    + `&key=${API_KEY}`;

  console.log('Fetching spreadsheet data...');
  const spreadsheet = await get(url);

  if (spreadsheet.error) {
    console.error('API error:', spreadsheet.error.message);
    process.exit(1);
  }

  const categories = [];

  for (const sheet of spreadsheet.sheets) {
    const sheetName = sheet.properties.title;
    const rows = (sheet.data[0] && sheet.data[0].rowData) || [];
    const projects = [];

    // Skip header row (index 0)
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].values || [];

      const nameCell = cells[0] || {};
      const activeCell = cells[1] || {};
      const devCell = cells[2] || {};
      const descCell = cells[3] || {};

      const name = nameCell.formattedValue;
      if (!name) continue;

      let url = nameCell.hyperlink || null;
      const active = normalizeActive(activeCell.formattedValue);
      const dev = devCell.formattedValue || null;
      const devUrl = devCell.hyperlink || null;
      let description = descCell.formattedValue || null;

      // If description is itself a URL, use the cell's hyperlink as project URL
      if (description && (description.startsWith('http://') || description.startsWith('https://'))) {
        if (!url && descCell.hyperlink) url = descCell.hyperlink;
        description = null;
      }

      // Filter placeholder start.gg homepage links
      if (url === 'http://start.gg/' || url === 'https://start.gg/') url = null;

      projects.push({ name, url, dev, devUrl, description, active });
    }

    categories.push({ name: sheetName, projects });
  }

  const total = categories.reduce((sum, c) => sum + c.projects.length, 0);
  console.log(`Fetched ${total} projects across ${categories.length} categories.`);

  const outputPath = path.join(__dirname, 'data', 'projects.js');
  fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(categories, null, 2) + ';\n');
  console.log(`Written to ${outputPath}`);
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
