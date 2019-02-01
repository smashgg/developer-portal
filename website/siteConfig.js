/**
 * Copyright (c) 2017-present, smash.gg, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
	title: 'Developer Portal', // Title for your website.
	tagline: 'Turning passions into careers',
	url: 'https://developer.smash.gg', // Your website URL
	baseUrl: '/', // Base URL for your project */
	// For github.io type URLs, you would set the url and baseUrl like:
	//	 url: 'https://smash.gg.github.io',
	//	 baseUrl: '/test-site/',

	apiUrl: 'https://api.smash.gg/gql/alpha/schema',

	// Used for publishing and more
	projectName: 'smashgg-developer',
	organizationName: 'smashgg',

	// Google Analytics ID
	gaTrackingId: 'UA-58622313-9',

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [
		{doc: 'intro', label: 'Docs'},
		{href: 'https://developer.smash.gg/reference/query.doc.html', label: 'Schema'},
		{page: 'explorer', label: 'API Explorer'},
		{page: 'help', label: 'Help'},
		{blog: true, label: 'Blog'},
	],

	/* path to images for header/footer */
	headerIcon: 'img/logo-white.svg',
	footerIcon: 'img/favicon/favicon.ico',
	favicon: 'img/favicon/favicon.ico',

	/* Colors for website */
	colors: {
		primaryColor: '#CB333B',
		secondaryColor: '#000000',
	},

	/* Custom fonts for website */
	fonts: {
		myFont: [
			"Roboto",
			"-apple-system",
			"system-ui"
		],
		myOtherFont: [
			"Roboto"
		]
	},

	// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Copyright © ${new Date().getFullYear()} smash.gg`,

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks.
		theme: 'default',
	},

	// Add custom scripts here that would be placed in <script> tags.
	scripts: ['https://buttons.github.io/buttons.js'],

	// On page navigation for the current documentation page.
	onPageNav: 'separate',
	// No .html extensions for paths.
	cleanUrl: true,
	// Make nav collapsible
	docsSideNavCollapsible: true,

	// Show documentation's last contributor's name.
	// enableUpdateBy: true,

	// Show documentation's last update time.
	// enableUpdateTime: true,

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
	repoUrl: 'https://github.com/smashgg/developer-portal',
};

module.exports = siteConfig;
