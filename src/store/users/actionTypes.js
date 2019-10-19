export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE
  //   payload: { error }
});

//---------------------------------------------------------------------------------------------------

// ---------------------------------Delete User -------------------------------------------------

export const DELETE_USER_BEGIN = "DELETE_USER_BEGIN";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUserBegin = () => ({
  type: DELETE_USER_BEGIN
});

export const deleteUserSuccess = users => ({
  type: DELETE_USER_SUCCESS,
  payload: { users }
});

export const deleteUserFailure = error => ({
  type: DELETE_USER_FAILURE
  //   payload: { error }
});
