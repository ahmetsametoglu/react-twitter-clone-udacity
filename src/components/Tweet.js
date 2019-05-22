import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
	render() {
		console.log(this.props);

		return <div className="tweet" />;
	}
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
    console.log(authedUser);
    
	const tweet = tweets[id];
	const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
	return {
		authedUser: authedUser,
		tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null,
		parentTweet: parentTweet
	};
};

export default connect(mapStateToProps)(Tweet);
