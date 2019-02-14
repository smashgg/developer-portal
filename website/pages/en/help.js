/**
 * Copyright (c) 2017-present, smash.gg, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Help extends React.Component {
  render() {
    const language = this.props.language || '';
    const supportLinks = [
      {
        content: `Learn more about using the smash.gg public API in our [official documentation.](${docUrl(
          'intro.html',
          language,
        )})`,
        title: 'Browse Docs',
      },
      {
        content: `Discuss the API, and its documentation, in our [Discord server](/docs/join-discord).`,
        title: 'Join the Community',
      },
      {
        content: `File bugs, suggest new queries/mutations, and submit other feedback to be tracked on our
          [Trello board.](https://trello.com/invite/b/Vdxnwz43/9fd5241770e053aba8c2260c7af71069/api-alpha-feedback)`,
        title: 'Submit Bugs'
      },
      {
        content: `You can contact us directly/privately using devrelations@smash.gg`,
        title: `Email Us`
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>
              If you need help with the smash.gg public API, please use
              one of the channels below!
            </p>
            <GridBlock contents={supportLinks} layout="fourColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
