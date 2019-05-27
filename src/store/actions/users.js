export const addUserRequest = user => ({
  type: "ADD_USER_REQUEST",
  payload: { user }
});

export const addUserSuccess = data => ({
  type: "ADD_USER_SUCCESS",
  payload: { data }
});
