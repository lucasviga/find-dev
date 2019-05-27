import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composer =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

// passa os reducers
const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
