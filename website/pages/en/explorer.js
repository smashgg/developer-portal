/**
 * Copyright (c) 2017-present, smash.gg, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

class IFrameExplorer extends React.Component {
	render() {
		return (
			<iframe style={{ height: '90vh' }} src="https://insiders.smashgg.com/developer/explorer/embed"></iframe>
		);
	}
}

module.exports = IFrameExplorer;
