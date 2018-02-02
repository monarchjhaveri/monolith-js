import { MoComponentDefinition } from "../model/MoComponentDefinition";
import {Action} from "../model/Action";

export function addComponent(definition: MoComponentDefinition): Action<MoComponentDefinition> {
  return {
    type: 'CREATE_COMPONENT',
    payload: definition
  };
}