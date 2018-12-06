/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const Showcase = require(`${process.cwd()}/core/Showcase.js`);
const translate = require('../../server/translate.js').translate;

class Users extends React.Component {
	render() {
		const { config: siteConfig } = this.props;
		const fbUsersToShowcase = siteConfig.users.filter(
			user => user.fbOpenSource,
		);
		const restToShowcase = siteConfig.users.filter(user => !user.fbOpenSource);

		return (
			<div className="mainContainer">
				<Container padding={['bottom']}>
					<div className="showcaseSection">
						<div className="prose">
							<h1>
								<translate>Who is using smash.gg's GraphQL API?</translate>
							</h1>
							<p>
								The smash.gg API powers some of the esport&apos;s worlds popular
									open source projects.
              				</p>
						</div>
						<Showcase users={fbUsersToShowcase} />
						<div className="prose">
							<p>
								<translate>
									smash.gg is also used by open source projects of all sizes.
                </translate>
							</p>
						</div>
						<Showcase users={restToShowcase} />
						<div className="prose">
							<p>
								<translate>Is your project using Docusaurus?</translate>
							</p>
							<p>
								Edit this page with a{' '}
								<a href="https://github.com/facebook/docusaurus/edit/master/v1/website/data/users.js">
									Pull Request
                </a>{' '}
								to add your logo.
              </p>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

Users.title = 'Users';

module.exports = Users;