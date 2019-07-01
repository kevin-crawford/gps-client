import {
  SET_JOBS,
  LOADING_JOBS,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_CUSTOMER,
  LOADING_CUSTOMER
} from "../types";
import axios from "axios";

export const getJobsByDate = jobDate => dispatch => {
  axios
    .get(`/jobsbydate/${jobDate}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: LOADING_JOBS });
      dispatch({
        type: SET_JOBS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getCustomer = customerId => dispatch => {
  axios
    .get(`/customers/${customerId}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: LOADING_CUSTOMER });
      dispatch({
        type: SET_CUSTOMER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

// export const getJob = jobId => dispatch => {
//   axios
//     .get('/jobs')
// };

// export const postJob = newJob => dispatch => {

// }

// export const deleteJob = jobId => dispatch {

// }

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
