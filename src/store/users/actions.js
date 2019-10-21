import * as types from "./actionTypes";
import { getUsers, deleteUser, getUser } from "../../request/users";

export function fetchUsers() {
  return async (dispatch, getState) => {
    dispatch(types.fetchUsersBegin());
    return await getUsers()
      .then(json => {
        dispatch(types.fetchUsersSuccess(json));
      })
      .catch(error => dispatch(types.fetchUsersFailure(error)));
  };
}

export function deleteUsers(id, userState) {
  return async (dispatch, getState) => {
    dispatch(types.deleteUserBegin());
    return await deleteUser(id)
      .then(json => {
        const usernewaray = userState.filter(row => row.id !== id);
        dispatch(types.deleteUserSuccess(usernewaray));
      })
      .catch(error => dispatch(types.deleteUserFailure(error)));
  };
}

export function getUserData(id) {
  return async dispatch => {
    dispatch(types.getUserBegin());
    return await getUser(id)
      .then(json => {
        dispatch(types.getUserSuccess(json));
      })
      .catch(error => dispatch(types.getUserFailure(error)));
  };
}
