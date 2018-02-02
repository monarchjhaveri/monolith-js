import { createStore } from 'redux';
import { Action } from '../model/Action';
import { State, StateUtils } from '../model/State';
import { MoComponentDefinition } from '../model/MoComponentDefinition';

function defaultState(): State {
  return {
    selectedCanvasComponentId: null,
    definition: []  
  }
}

function reducer(oldState:State = defaultState(), action: Action<string | MoComponentDefinition>) {
  const state = StateUtils.clone(oldState);

  switch(action.type) {
    case 'COMPONENT_CLICKED':
      state.selectedCanvasComponentId = <string> action.payload;
      return state;
    case 'CREATE_COMPONENT':
      state.definition.push(<MoComponentDefinition> action.payload);
      return state;
    default:
      return state;
  }
}

export const Store = createStore(reducer);

(<any>window).Store = Store;