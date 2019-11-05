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
    //Fetch User Listing

    case types.FETCH_BORROWER_BEGIN:
      return {
        ...state
      };

    case types.FETCH_BORROWER_SUCCESS:
      return {
        ...state,
        borrowersArray: action.payload.borrower.data
      };

    case types.FETCH_BORROWER_FAILURE:
      return {
        ...state
      };

    // Delete Borrower

    case types.DELETE_BORROWER_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: {}
      };

    case types.DELETE_BORROWER_SUCCESS:
      return {
        ...state,
        borrowersArray: action.payload.borrower,
        isLoading: false
      };

    case types.DELETE_BORROWER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };

    //create
    case types.CREATE_BORROWER_BEGIN:
      return {
        ...state,
        isBorrowerCreated: false,
        error: null
      };

    case types.CREATE_BORROWER_SUCCESS:
      return {
        ...state,
        borrowerData: action.payload.borrower,
        isBorrowerCreated: true,
        isValidationError: false,
        error: null
      };

    case types.CREATE_BORROWER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        borrowerData: {},
        isValidationError: true,
        isBorrowerCreated: false
      };

    //update
    case types.UPDATE_BORROWER_BEGIN:
      return {
        ...state,
        isBorrowerUpdated: false,
        error: null
      };

    case types.UPDATE_BORROWER_SUCCESS:
      return {
        ...state,
        borrowerData: action.payload.borrower,
        isBorrowerUpdated: true,
        isValidationError: false,
        error: null
      };

    case types.UPDATE_BORROWER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        borrowerData: {},
        isValidationError: true,
        isBorrowerUpdated: false
      };

    //Get User

    case types.GET_BORROWER_BEGIN:
      return {
        ...state,
        error: {},
        isBorrowerUpdated: false,
        isBorrowerCreated: false,
        isValidationError: false,
        error: {},
        borrowerDetail: {}
      };

    case types.GET_BORROWER_SUCCESS:
      return {
        ...state,
        borrowerDetail: action.payload.borrowers,
        isBorrowerUpdated: false,
        error: {},
        isBorrowerCreated: false,
        isValidationError: false
      };

    case types.GET_BORROWER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        borrowerDetail: {}
      };

    case types.RESET_ALL:
      return {
        initialState
      };

    default:
      return state;
  }
}
