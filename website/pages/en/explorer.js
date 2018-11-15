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
			<iframe style={{ height: '90vh' }} src="http://local.smash.gg:3030/developer/explorer/embed"></iframe>
		);
	}
}

module.exports = IFrameExplorer;
