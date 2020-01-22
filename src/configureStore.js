import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { connectRoutes } from "redux-first-router";

import { routes } from "routesMap";
import moduleReducers from "modules";

const composeEnhancers = (...args) =>
  typeof window === "object"
    ? composeWithDevTools({})(...args)
    : compose(...args);

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routes);
  const rootReducer = combineReducers({
    ...moduleReducers,
    location: reducer
  });

  const middlewares = applyMiddleware(middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, preloadedState, enhancers);
  return { store };
}
