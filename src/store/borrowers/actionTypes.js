export const RESET_ALL = "RESET_ALL";

export const resetAll = () => ({
  type: RESET_ALL
});

// ---------------------------------Fetch Borrower -------------------------------------------------

export const FETCH_BORROWER_BEGIN = "FETCH_BORROWER_BEGIN";
export const FETCH_BORROWER_SUCCESS = "FETCH_BORROWER_SUCCESS";
export const FETCH_BORROWER_FAILURE = "FETCH_BORROWER_FAILURE";

export const fetchBorrowerBegin = () => ({
  type: FETCH_BORROWER_BEGIN
});

export const fetchBorrowerSuccess = borrower => ({
  type: FETCH_BORROWER_SUCCESS,
  payload: { borrower }
});

export const fetchBorrowerFailure = error => ({
  type: FETCH_BORROWER_FAILURE,
  payload: { error }
});

// ---------------------------------CREATE Borrower -------------------------------------------------

export const CREATE_BORROWER_BEGIN = "CREATE_BORROWER_BEGIN";
export const CREATE_BORROWER_SUCCESS = "CREATE_BORROWER_SUCCESS";
export const CREATE_BORROWER_FAILURE = "CREATE_BORROWER_FAILURE";

export const createBorrowerBegin = () => ({
  type: CREATE_BORROWER_BEGIN
});

export const createBorrowerSuccess = borrower => ({
  type: CREATE_BORROWER_SUCCESS,
  payload: { borrower }
});

export const createBorrowerFailure = error => ({
  type: CREATE_BORROWER_FAILURE,
  payload: { error }
});

// ---------------------------------UPDATE Borrower -------------------------------------------------

export const UPDATE_BORROWER_BEGIN = "UPDATE_BORROWER_BEGIN";
export const UPDATE_BORROWER_SUCCESS = "UPDATE_BORROWER_SUCCESS";
export const UPDATE_BORROWER_FAILURE = "UPDATE_BORROWER_FAILURE";

export const updateBorrowerBegin = () => ({
  type: UPDATE_BORROWER_BEGIN
});

export const updateBorrowerSuccess = borrower => ({
  type: UPDATE_BORROWER_SUCCESS,
  payload: { borrower }
});

export const updateBorrowerFailure = error => ({
  type: UPDATE_BORROWER_FAILURE,
  payload: { error }
});

// ---------------------------------get User -------------------------------------------------

export const GET_BORROWER_BEGIN = "GET_BORROWER_BEGIN";
export const GET_BORROWER_SUCCESS = "GET_BORROWER_SUCCESS";
export const GET_BORROWER_FAILURE = "GET_USER_FAILURE";

export const getBorrowerBegin = () => ({
  type: GET_BORROWER_BEGIN
});

export const getBorrowerSuccess = borrowers => ({
  type: GET_BORROWER_SUCCESS,
  payload: { borrowers }
});

export const getBorrowerFailure = error => ({
  type: GET_BORROWER_FAILURE,
  payload: { error }
});
