import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { addUserSuccess } from "../actions/users";

export function* addUser(action) {
  const { data } = yield call(api.get, `/${action.payload.user}`);

  const userData = {
    id: data.id,
    name: data.name,
    login: data.login,
    avatar: data.avatar_url
  };

  yield put(addUserSuccess(userData));
}
