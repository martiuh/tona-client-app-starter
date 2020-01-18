import { components, pages } from "../../routesMap";

export default function route(state = pages.HOME, action = {}) {
  return components[action.type] || state;
}
