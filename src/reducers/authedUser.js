import { SET_AUTH_USER } from '../actions/authedUser';

export const authedUser = (state = null, action) => {
	switch (action.type) {
		case SET_AUTH_USER:
			return { ...state, id: action.id };

		default:
			return state;
	}
};
