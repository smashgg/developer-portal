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
        File bugs, suggest new queries/mutations, and submit other feedback to
        be tracked on our{' '}
        <Link to="https://trello.com/invite/b/Vdxnwz43/9fd5241770e053aba8c2260c7af71069/api-alpha-feedback">
          Trello board
        </Link>
        .
      </>
    ),
    title: 'Submit Bugs',
  },
  {
    content: `You can contact us directly/privately using devrelations@smash.gg`,
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
