import * as types from "./actionTypes";
import {
  createBorrower,
  getBorrowers,
  updateBorrower,
  showBorrower
} from "../../request/borrowers";

export function fetchBorrowers() {
  return async dispatch => {
    dispatch(types.fetchBorrowerBegin());
    return await getBorrowers()
      .then(json => {
        dispatch(types.fetchBorrowerSuccess(json));
      })
      .catch(error => dispatch(types.fetchBorrowerFailure(error)));
  };
}

export function getBorrower(id) {
  return async (dispatch, getState) => {
    dispatch(types.getBorrowerBegin());
    await showBorrower(id)
      .then(json => {
        dispatch(types.getBorrowerSuccess(json));
      })
      .catch(error => dispatch(types.getBorrowerFailure(error)));
  };
}

export function createBorrowerData(data) {
  return dispatch => {
    dispatch(types.createBorrowerBegin());
    createBorrower(data)
      .then(json => dispatch(types.createBorrowerSuccess(json)))
      .catch(error => dispatch(types.createBorrowerFailure(error)));
  };
}

export function updateBorrowerData(borrowerid, data) {
  return dispatch => {
    dispatch(types.updateBorrowerBegin());
    updateBorrower(data, borrowerid)
      .then(json => dispatch(types.updateBorrowerSuccess(json)))
      .catch(error => dispatch(types.updateBorrowerFailure(error)));
  };
}

export function resetAll() {
  return async (dispatch, getState) => {
    dispatch(types.resetAll());
  };
}
