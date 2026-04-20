import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import categories from '@site/data/projects';
import styles from './projects.module.css';

function ProjectRow({ project }) {
  return (
    <div className={styles.row}>
      <div className={styles.nameCell}>
        {project.url
          ? <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>{project.name}</a>
          : <span className={styles.projectName}>{project.name}</span>
        }
      </div>
      <div className={styles.devCell}>
        {project.dev && project.devUrl
          ? <a href={project.devUrl} target="_blank" rel="noopener noreferrer" className={styles.devLink}>{project.dev}</a>
          : project.dev
            ? <span className={styles.devName}>{project.dev}</span>
            : null
        }
      </div>
      <div className={styles.descCell}>
        {project.description && <span className={styles.description}>{project.description}</span>}
      </div>
    </div>
  );
}

function normalizeActive(active) {
  if (!active) return 'Unknown';
  const val = active.toLowerCase();
  if (val === 'yes' || val.startsWith('yes')) return 'Yes';
  if (val === 'no') return 'No';
  return 'Unknown';
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function Category({ category, initialOpen }) {
  const [open, setOpen] = useState(initialOpen || false);
  const slug = slugify(category.name);

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      window.history.pushState(null, '', '#' + slug);
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div id={slug} className={styles.category}>
      <button className={styles.categoryHeader} onClick={handleToggle}>
        <span>{category.name}</span>
        <span className={styles.meta}>
          <span className={styles.count}>{category.projects.length}</span>
          <span className={styles.chevron}>{open ? '▲' : '▼'}</span>
        </span>
      </button>
      {open && (
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.nameCell}>Project</div>
            <div className={styles.devCell}>Developer</div>
            <div className={styles.descCell}>Description</div>
          </div>
          {category.projects.filter(p => p.url && p.active !== 'No').map((project, i) => (
            <ProjectRow key={i} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

function Projects() {
  const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Layout title="Community Projects">
      <div className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Community Projects</h1>
          <p className={styles.subtitle}>
            Projects built by the community using the start.gg API. Add your project <a href="https://docs.google.com/spreadsheets/d/1OYizwbD1A2Ndcs0TnoMNrNO8hlDtngSgQnfwwc5mfiU/" target="_blank" rel="noopener noreferrer" className={styles.addLink}>here</a>.
          </p>
        </div>
        <div className={styles.content}>
          {categories.map((category, i) => (
            <Category key={i} category={category} initialOpen={slugify(category.name) === hash} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
