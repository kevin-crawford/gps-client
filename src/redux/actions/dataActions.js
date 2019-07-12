import {
  SET_JOBS,
  SET_JOB,
  LOADING_JOBS,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_CUSTOMER,
  LOADING_CUSTOMER
} from "../types";
import axios from "axios";

export const getJobsByDate = jobDate => dispatch => {
  dispatch({ type: LOADING_JOBS });
  axios
    .get(`/jobsbydate/${jobDate}`)
    .then(res => {
      console.log(res.data);
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
  dispatch({ type: LOADING_CUSTOMER });
  axios
    .get(`/customers/${customerId}`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SET_CUSTOMER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response
      });
    });
};

export const getJob = jobId => dispatch => {
  dispatch({ type: LOADING_JOBS });
  axios
    .get(`/jobs/${jobId}`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SET_JOB,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response
      });
    });
};

// export const postJob = newJob => dispatch => {

// }

// export const deleteJob = jobId => dispatch {

// }

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
