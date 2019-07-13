import {
  SET_JOBS,
  SET_JOB,
  POST_JOB,
  LOADING_JOBS,
  SET_CUSTOMER,
  LOADING_CUSTOMER
} from "../types";

const initialState = {
  loading: false,
  jobs: [],
  job: null,
  customer: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        loading: false,
        jobs: action.payload
      };
    case SET_JOB:
      return {
        ...state,
        loading: false,
        job: action.payload
      };
    case POST_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case LOADING_JOBS:
      return {
        ...state,
        loading: true
      };
    case SET_CUSTOMER:
      return {
        ...state,
        loading: false,
        customer: action.payload
      };
    case LOADING_CUSTOMER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
