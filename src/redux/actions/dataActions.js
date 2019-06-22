import { SET_JOBS, LOADING_JOBS, SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../types';
import axios from 'axios';


export const getJobsByDate = (jobDate) => dispatch => {
	console.log(jobDate)
	axios
		.post('/jobsbydate', jobDate)
		.then(res => {
			console.log(res.data);
			dispatch({ type: LOADING_JOBS });
			dispatch({
				type: SET_JOBS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch({
				type: SET_ERRORS,
				payload: []
			})
		});
}

// export const getJob = jobId => dispatch => {

// }

// export const postJob = newJob => dispatch => {

// }

// export const deleteJob = jobId => dispatch {

// }

export const clearErrors = () => dispatch => {
	dispatch({ type: CLEAR_ERRORS })
}