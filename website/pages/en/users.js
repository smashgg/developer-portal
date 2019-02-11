/**
 * Copyright (c) 2017-present, smash.gg, Inc.
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
		const openSourceToShowcase = siteConfig.users.filter(
			user => user.openSource,
		);
		const featuredToShowcase = siteConfig.users.filter(user => user.pinned);

		return (
			<div className="mainContainer">
				<Container padding={['bottom']}>
					<div className="showcaseSection">
						<div className="prose">
							<h1>
								Who is using the smash.gg public API?
							</h1>
							<p>
								Data from smash.gg powers some of the esports world's awesome projects!
              				</p>
						</div>
						<Showcase users={featuredToShowcase} />
						{/* <div className="prose">
							<p>
									Including open source projects of all sizes.
							</p>
						</div>
						<Showcase users={openSourceToShowcase} /> */}
						<div className="prose">
							<p>
								<i>
									Is your project using our API?
								</i>
							</p>
							<p>
								<i>
									Edit this page with a{' '}
									<a href="https://github.com/smashgg/developer-portal/edit/master/website/data/users.js">
										Pull Request
									</a>{' '}
									to add your logo.
              					</i>
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