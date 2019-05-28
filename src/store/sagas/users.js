import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { addUserSuccess } from "../actions/users";
import { addUserFailure } from "../actions/users";

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/${action.payload.user}`);

    const userData = {
      id: data.id,
      name: data.name,
      login: data.login,
      avatar: data.avatar_url,
      cordinates: action.payload.cordinates
    };

    yield put(addUserSuccess(userData));
  } catch (err) {
    yield put(addUserFailure("erro ao adicionar o usuário"));
  }
}
