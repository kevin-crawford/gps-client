import { SET_JOBS, LOADING_JOBS} from '../types';

const initialState = {
	loading: false,
	jobs: [],
	job: {}
};

export default function(state = initialState, action) {
	switch(action.type){
		case SET_JOBS:
			return {
				...state,
				loading: false,
				jobs: action.payload
			};
		case LOADING_JOBS:
			return {
				...state,
				loading: true
			}
		default:
			return state;
	}
}