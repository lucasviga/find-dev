import { call, put, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "../../services/api";

import { Creators as UsersActions } from "../ducks/users";
import { Creators as ModalActions } from "../ducks/modal";

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/${action.payload.user}`);

    /**
     * verica meu state que é chamado de users -> data (o nome do meu state) -> find (metodo para encontrar)
     * faz a comparacao do meu user.id (do meu state) === com o data.id vindo da requisicao (api)
     * */
    const isDuplicated = yield select(state =>
      state.users.data.find(user => user.id === data.id)
    );

    if (isDuplicated) {
      yield put(UsersActions.addUserFailure("Usuário já existe"));
      toast.warn("Usuário já existe", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        cordinates: action.payload.cordinates
      };

      yield put(UsersActions.addUserSuccess(userData));
      toast.success("Adicionado com sucesso!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  } catch (err) {
    yield put(UsersActions.addUserFailure("Erro ao adicionar o usuário"));
    toast.warn("Erro ao adicionar o usuário", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  } finally {
    yield put(ModalActions.hideModal());
  }
}
