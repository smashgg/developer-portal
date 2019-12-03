import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const supportLinks = [
  {
    content: (
      <>
        Learn more about using the smash.gg public API in our{' '}
        <Link to="docs/intro">official documentation</Link>
      </>
    ),
    title: 'Browse Docs',
  },
  {
    content: (
      <>
        Discuss the API, and its documentation, in our{' '}
        <Link to="docs/join-discord">Discord server</Link>
      </>
    ),
    title: 'Join the Community',
  },
  {
    content: (
      <>
        <p>
          File bugs using the form at  <Link to="/help/bugs">developer.smash.gg/help/bugs</Link>.
        </p>
        <p>
          Suggest new queries, mutations, and other feedback using the form at <Link to="/help/feedback">developer.smash.gg/help/feedback</Link>.
        </p>
      </>
    ),
    title: 'Submit Bugs or Feedback',
  },
  {
    content: (
      <>
        You can contact us directly/privately using <Link href="mailto:devrelations@smash.gg">devrelations@smash.gg</Link>
      </>
    ),
    title: `Email Us`,
  },
];

function Help() {
  return (
    <Layout title="Help">
      <div className="container container--fluid padding-horiz--xl margin-top--lg">
        <h1>Need help?</h1>
        <p>
          If you need help with the smash.gg public API, please use one of the
          channels below!
        </p>

        <div className="row text--center">
          {supportLinks.map(({ title, content }, idx) => (
            <div key={idx} className="col col--6 margin-vert--md">
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Help;
