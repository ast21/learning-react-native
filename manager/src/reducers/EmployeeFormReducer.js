import { EMPLOYEE_INPUT_UPDATE, EMPLOYEE_CREATE } from "../actions/types";

const initialState = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_INPUT_UPDATE:
      console.log('EMPLOYEE_INPUT_UPDATE', action.payload);
      return { ...state, [action.payload.key]: action.payload.value };
    case EMPLOYEE_CREATE:
      return initialState;
    default:
      return state;
  }
}