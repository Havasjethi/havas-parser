import { ArgumentDescription, } from "./types";
import { UnifiedTypes } from "./argument_types";

export interface Decorable {
  decorators?: DecoratorCallDescription[];
}

export interface DecoratorCallDescription {
  name?: string;
  parameters: ArgumentDescription[];
}

export interface JsDocable {
  comment?: string;
}

export interface BaseArgumentParameterDescription {
  index: number;
  type: UnifiedTypes;
  has_spread?: boolean;
}

export type AccessModifier = 'public' | 'protected' | 'private' | 'default';
export type StaticModifier = 'static';
export type AbstractModifier = 'abstract';
export type ReadonlyModifier = 'readonly';

export type MethodModifiers = AccessModifier | StaticModifier | AbstractModifier;
export type UnifiedModifier = AccessModifier | StaticModifier | ReadonlyModifier | AbstractModifier;



// export interface TypeDescription {
//   type: UnifiedTypes,
// }

