import { NOT_FOUND } from "redux-first-router";

export const pages = Object.freeze({
  HOME: "HOME"
});

const routesMap = {
  [pages.HOME]: {
    route: {
      path: "/"
    },
    component: "Home"
  },
  [NOT_FOUND]: {
    component: "NotFound"
  }
};

const routesKeys = Object.keys(routesMap);

const routesObj = routesKeys.reduce(
  (prev, current) => {
    if (current) {
      const { route, component } = routesMap[current];
      return {
        components: {
          ...prev.components,
          [current]: component
        },
        routes: {
          ...prev.routes,
          [current]: {
            ...route
          }
        }
      };
    }

    return prev;
  },
  {
    components: {},
    routes: {}
  }
);

export const { routes, components } = routesObj;
