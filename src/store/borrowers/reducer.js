import * as types from "./actionTypes";

const initialState = {
  borrowersArray: [],
  borrowerDetail: {},
  borrowerData: {},
  isLoading: false,
  error: null,
  isBorrowerUpdated: false,
  isBorrowerCreated: false,
  isValidationError: false,
  meta: {}
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CREATE_BORROWER_BEGIN:
      return {
        ...state,
        isBorrowerCreated: false,
        error: null
      };
      break;

    case types.CREATE_BORROWER_SUCCESS:
      return {
        ...state,
        borrowerData: action.payload.borrower,
        isBorrowerCreated: true,
        isValidationError: false,
        error: null
      };
      break;

    case types.CREATE_BORROWER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        borrowerData: {},
        isValidationError: true,
        isBorrowerCreated: false
      };
      break;

    case types.RESET_ALL:
      return {
        initialState
      };
      break;

    default:
      return state;
  }
}
