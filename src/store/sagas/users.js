import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UsersActions } from "../ducks/users";
import { Creators as ModalActions } from "../ducks/modal";

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

    yield put(UsersActions.addUserSuccess(userData));
  } catch (err) {
    yield put(UsersActions.addUserFailure("erro ao adicionar o usuário"));
  } finally {
    yield put(ModalActions.hideModal());
  }
}
