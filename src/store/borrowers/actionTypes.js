export const RESET_ALL = "RESET_ALL";

export const resetAll = () => ({
  type: RESET_ALL
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
