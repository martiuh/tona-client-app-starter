import { default as routeReducer } from "./route";
import * as routeModule from "./route";

const { moduleName: routeModuleName } = routeModule;

export default {
  [routeModuleName]: routeReducer
};

export { routeModule };
