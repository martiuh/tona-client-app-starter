import { moduleName } from "./constants";

const moduleSel = state => state[moduleName];
export const routeSel = moduleSel;
