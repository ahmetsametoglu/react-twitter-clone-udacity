import React, { Component } from 'react';
import { connect } from 'react-redux';
class Dashboard extends Component {
	componentDidMount() {}

	render() {
		return (
			<div>
				<h3 className="center">Your Timeline</h3>
				<ul className="dashboard-list">
					{this.props.tweetIds.map((id) => (
						<li key={id}>
							<div>tweet id:{id}</div>
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
