import { MoComponentDefinition } from "./MoComponentDefinition";

export interface State {
  selectedCanvasComponentId?:string;
  definition: MoComponentDefinition[];
}

export class StateUtils {
  static clone(state: State) {
    return JSON.parse(JSON.stringify(state));
  }
}