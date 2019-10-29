import * as types from "./actionTypes";
import { createBorrower } from "../../request/borrowers";

export function createBorrowerData(data) {
  return dispatch => {
    dispatch(types.createBorrowerBegin());
    createBorrower(data)
      .then(json => dispatch(types.createBorrowerSuccess(json)))
      .catch(error => dispatch(types.createBorrowerFailure(error)));
  };
}

export function resetAll() {
  return async (dispatch, getState) => {
    dispatch(types.resetAll());
  };
}
