import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";

import { routes } from "routesMap";
import moduleReducers from "modules";

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routes);
  const rootReducer = combineReducers({
    ...moduleReducers,
    location: reducer
  });

  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(enhancer, middlewares);
  const store = createStore(rootReducer, preloadedState, enhancers);
  return { store };
}
