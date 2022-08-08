import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function Help() {
  if (typeof window !== 'undefined') {
    window.ATL_JQ_PAGE_PROPS = {
      'd4b7b8c3': {
        triggerFunction: (showCollectorDialog) => {
          $('#report-bugs').click((evt) => {
            evt.preventDefault()
            showCollectorDialog();
          });
        }
      },
      '1d971c66': {
        triggerFunction: (showCollectorDialog) => {
          $('#submit-feedback').click((evt) => {
            evt.preventDefault()
            showCollectorDialog();
          });
        }
      },
    };
  }

  const supportLinks = [
    {
      content: (
        <>
          Learn more about using the start.gg public API in our 
          <Link to="docs/intro">official documentation</Link>
        </>
      ),
      title: 'Browse Docs',
    },
    {
      content: (
        <>
          Discuss the API and its documentation in our <Link to="docs/join-discord">Discord server</Link>
        </>
      ),
      title: 'Join the Community',
    },
    {
      content: (
        <>
          <p>
            Found an issue while using the API? <Link to="https://github.com/smashgg/developer-portal" id="report-bugs">Report it here.</Link>
          </p>
          <p>
            Want to suggest new queries, mutations, or provide other feedback? <Link to="https://github.com/smashgg/developer-portal" id="submit-feedback">Let us know here!</Link>
          </p>
        </>
      ),
      title: 'Submit Bugs or Feedback',
    },
    {
      content: (
        <>
          You can contact us directly using <Link href="mailto:devrelations@start.gg">devrelations@start.gg</Link>
        </>
      ),
      title: `Email Us`,
    },
  ];

  return (
    <Layout title="Help">
      <div className="container container--fluid padding-horiz--xl margin-top--lg">
        <h1>Need help?</h1>
        <p>
          If you need help with the start.gg public API, please use one of the
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
