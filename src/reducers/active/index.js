import { ACTIVE } from '../../actions/types';

const initialState = {
	active: 0
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIVE:
			return {
				...state,
				active: action.payload
			};
		default:
			return state;
	}
};

export default reducer;