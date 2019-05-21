import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveTweets } from '../actions/tweets';
import { setAuthUser } from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => {
	return (dispatch) => {
		return getInitialData().then(({ users, tweets }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveTweets(tweets));
			dispatch(setAuthUser(AUTHED_ID));
		});
	};
};
