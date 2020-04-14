import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import reducer from "./reducers";


const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const configureStore = () => {
  const middlewares = [];

  middlewares.push(thunk);

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    persistReducer(persistConfig, reducer), middlewareEnhancer);
  return store;
};

const store = configureStore();

export const persistor = persistStore(store);
export default store;
