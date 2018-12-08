/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
	render() {
		const { config: siteConfig } = this.props;
		const users = [
			{
				caption: 'SmashTicker',
				// You will need to prepend the image path with your baseUrl
				// if it is not '/', like: '/test-site/img/docusaurus.svg'.
				image: 'https://lh3.googleusercontent.com/HJzDy4IhHwwpmb_LZtYs4tmth-Z4N8BYltaxBlgMjkIaB97HIer3HJY3V6Ebh39dKn2s0qGRGuo=w128-h128-e365',
				infoLink: 'https://chrome.google.com/webstore/detail/smashticker-watch-people/nhjklhalmbccpfhpnedcleiabpkocggi',
				pinned: true,
			},
		];

		if (users.length === 0) {
			return null;
		}

		const showcase = users.map(user => (
			<a className="link" href={user.infoLink} key={user.infoLink}>
				<img src={user.image} alt={user.caption} title={user.caption} />
				<p>{user.caption} </p>
			</a>
		));

		return (
			<div className="mainContainer">
				<Container>
					<div className="showcaseSection">
						<div className="prose">
							<h1>Who is using the smash.gg public API?</h1>
							<p>The smash.gg public API is used by all kinds of
								community projects!
							</p>
						</div>
						<div className="logos">{showcase}</div>
						<p>Are you using this project?</p>
						<p>
							Edit this page with a{' '}
							<a href="https://github.com/smashgg/developer-portal">
								Pull Request
							</a>{' '}
							to add your logo.
						</p>
					</div>
				</Container>
			</div>
		);

		// return (
		// 	<div className="mainContainer">
		// 		<Container padding={['bottom']}>
		// 			<div className="showcaseSection">
		// 				<div className="prose">
		// 					<h1>
		// 						Who is using Docusaurus?
		// 					</h1>
		// 					<p>
		// 						Docusaurus powers some of Facebook&apos;s popular{' '}
		// 						<a href="https://code.facebook.com/projects/">
		// 							open source projects
		// 			</a>
		// 						.
		// 		</p>
		// 				</div>
		// 				<Showcase users={users} />
		// 				<div className="prose">
		// 					<p>
		// 							Docusaurus is also used by open source projects of all sizes.
		// 					</p>
		// 				</div>
		// 				<Showcase users={users} />
		// 				<div className="prose">
		// 					<p>
		// 						Is your project using Docusaurus?
		// 					</p>
		// 					<p>
		// 						Edit this page with a{' '}
		// 						<a href="https://github.com/facebook/docusaurus/edit/master/v1/website/data/users.js">
		// 							Pull Request
		// 			</a>{' '}
		// 						to add your logo.
		// 		</p>
		// 				</div>
		// 			</div>
		// 		</Container>
		// 	</div>
		// );
	}
}

module.exports = Users;