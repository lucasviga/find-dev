import { all, takeLatest } from "redux-saga/effects";

import { addUser } from "./users";

export default function* rootSaga() {
  yield all([takeLatest("ADD_USER_REQUEST", addUser)]);
}
