export const addUserRequest = user => ({
  type: "ADD_USER_REQUEST",
  payload: { user }
});

export const addUserSuccess = data => ({
  type: "ADD_USER_SUCCESS",
  payload: { data }
});

export const addUserFailure = error => ({
  type: "ADD_USER_FAILURE",
  payload: { error }
});
