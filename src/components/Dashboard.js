import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
class Dashboard extends Component {
	componentDidMount() {}

	render() {
		return (
			<div>
				<h3 className="center">Your Timeline</h3>
				<ul className="dashboard-list">
					{this.props.tweetIds.map((id) => (
						<li key={id}>
							<Tweet id={id} />
						</li>
					))}
					<li />
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ tweets }) => {
	return {
		tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamps - tweets[a].timestamps)
	};
};

export default connect(mapStateToProps)(Dashboard);
