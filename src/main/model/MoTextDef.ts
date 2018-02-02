import { MoComponentDefinition } from './MoComponentDefinition';

export interface MoTextDef extends MoComponentDefinition {
  properties: {
    text: string
  }
}