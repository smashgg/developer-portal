import React from 'react';
import classnames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const HomeSplash = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <header
      className={classnames(
        'hero hero--light text--center',
        styles.heroBanner,
      )}>
      <div className="container">
        <h1 className={styles.heroProjectTitle}>{siteConfig.title}</h1>
        <h2 className={styles.heroProjectTagline}>{siteConfig.tagline}</h2>
        <div className={styles.heroButtons}>
          <Link className="button" to={useBaseUrl('docs/intro')}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomeSplash />
    </Layout>
  );
}

export default Home;
