import { UnifiedTypes } from "./argument_types";
import {
  AccessModifier,
  BaseArgumentParameterDescription,
  Decorable,
  DecoratorCallDescription,
  JsDocable, UnifiedModifier
} from "./base_types";

export interface ClassExtender {
  class_name: string,
  generics: undefined | { // Note This doesn't display values from default values
    name: string,
    index: string,
  }[];
  // Generic
  // Bool for interface ?? || Type == Extend | Implements
}

export interface ClassDescription {
  name: string | undefined; // Anonim
  generic_types?: {
    type_name: string;
    extends: string[];
  };
  interfaces: ClassExtender[];
  extended_class: undefined | ClassExtender;
  decorators: DecoratorCallDescription[];
  properties: {
    access_modifier?: UnifiedModifier[];
    name: string;
    type: string;
    default_value: string;
    decorators?: DecoratorCallDescription[];
  }[];
  accessors?: AccessorDescription[];
  methods: MethodDescription[];
}

export interface MethodDescription extends JsDocable {
  access_modifiers?: UnifiedModifier[];
  name: string;
  decorators?: DecoratorCallDescription[];
  parameters: ParameterDescription[];
  return_value: UnifiedTypes;
}


export type AccessorDescription = {
  type: 'Get' | 'Set';
  name: string;
  access_modifiers?: UnifiedModifier[];
};

export interface ArgumentDescription extends BaseArgumentParameterDescription {
  value?: any;
}

export interface ParameterDescription extends BaseArgumentParameterDescription, Decorable, JsDocable {
  name: string;
  default_value?: any;
}

export interface Callable {
  arguments: any[];
  name: string | undefined;
  return_type: any;
}
