import { EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
    case EMPLOYEE_SAVE_SUCCESS:
      return initialState;
    default:
      return state;
  }
}