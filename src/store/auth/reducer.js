import * as types from "./actionTypes";

const initialState = {
  isAuthenticated: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESET_ALL:
      return initialState;
    case types.LOGIN_BEGIN:
      return { isAuthenticated: false };
    case types.LOGIN_SUCCESS:
      return { isAuthenticated: true };
    case types.LOGIN_FAILURE:
      return { isAuthenticated: false };
    default:
      return {
        ...state
      };
  }
}
