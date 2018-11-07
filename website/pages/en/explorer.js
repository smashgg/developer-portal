/**
 * Copyright (c) 2017-present, smash.gg, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Explorer extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            TODO: graphiql here
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Explorer;
