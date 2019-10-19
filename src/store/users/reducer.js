import * as types from "./actionTypes";

const initialState = {
  usersArray: []
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    //Fetch User Listing

    case types.FETCH_USERS_BEGIN:
      return {
        ...state
      };

    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersArray: action.payload.users.data
      };

    case types.FETCH_USERS_FAILURE:
      return {
        ...state
      };

    // Delete User

    case types.DELETE_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: {}
      };

    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        usersArray: action.payload.users,
        isLoading: false
      };

    case types.DELETE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
