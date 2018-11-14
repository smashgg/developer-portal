/**
 * Copyright (c) 2017-present, smash.gg, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const GraphiQL = require('graphiql');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

const defaultQuery = `query TournamentQuery($slug: String) {
	tournament(slug: $slug){
		id
		name
		events {
			id
			name
		}
	}
}`;

class Explorer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {};
	}

	componentDidMount() {
		const authToken = this.state.authToken;
		const gqlUrl = siteConfig.apiUrl;

		const graphQLFetcher = graphQLParams =>
			fetch(gqlUrl, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${authToken}`
				},
				body: JSON.stringify(graphQLParams),
			}).then(response => response.json());

		const graphiql = (
			<GraphiQL
					fetcher={graphQLFetcher}
					defaultQuery={defaultQuery}
				>
					<GraphiQL.Toolbar>
						<label htmlFor="authToken">Auth token</label>
						<input name="authToken" type="text" onChange={this.changeAuthToken} />
					</GraphiQL.Toolbar>
				</GraphiQL>
		);

		this.setState({
			graphiql
		});
	}

	render() {
		return (
			<div className="mainContainer">
				{this.state.graphiql}
			</div>
		);
	}
}

module.exports = Explorer;
