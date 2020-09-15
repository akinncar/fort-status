import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const createAppropriateStore = createStore;
const store = createAppropriateStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store;
