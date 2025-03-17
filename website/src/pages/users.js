import React from 'react';
import Layout from '@theme/Layout';
import { Showcase } from '@site/src/components/Showcase';
import data from '@site/data/users';

function Users() {
  const featuredToShowcase = data.filter(user => user.pinned);

  return (
    <Layout>
      <section className="container margin-vert--xl text--center">
        <div>
          <h1>Who is using the start.gg public API?</h1>
          <p>
            Data from start.gg powers some of the esports world's awesome
            projects!
          </p>
        </div>

        <Showcase users={featuredToShowcase} />

        <div>
          <p>
            <i>Is your project using our API?</i>
          </p>
          <p>
            <i>
              Edit this page with a{' '}
              <a
                href="https://github.com/smashgg/developer-portal/edit/master/website/data/users.js"
                target="_blank">
                Pull Request
              </a>{' '}
              to add your logo.
            </i>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default Users;
