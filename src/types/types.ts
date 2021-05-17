import { UnifiedTypes } from "./argument_types";

export interface ClassExtender {
  class_name: string,
  generics: undefined | { // Note This doesn't display values from default values
    name: string,
    index: string,
  }[];
  // Generic
  // Bool for interface ?? || Type == Extend | Implements
};

export interface ClassDescription {
  name: string | undefined; // Anonim
  generic_types?: {
    type_name: string;
    extends: string[];
  };
  interfaces: ClassExtender[];
  extended_class: undefined | ClassExtender;
  decorators: DecoratorCallDescription[];
  fields: {
    access_modifier?: AccessModifier;
    name: string;
    type: string;
    default_value: string;
    decorators?: ClassDescription['decorators'];
  }[];
  accessors?: AccessorDescription[];
  methods: {
    access_modifier?: AccessModifier;
    name: string;
    decorators?: ClassDescription['decorators'];
    parameters: ParameterDescription[];
    return_value: UnifiedTypes;
  }[];
}

export interface ArgumentDescription {
  argument_type: UnifiedTypes;
  argument_value: any;
  index: number;
}

export interface DecoratorCallDescription {
  name?: string;
  parameters: ArgumentDescription[];
}

export type AccessorDescription = any;

export interface ParameterDescription {
  index: number;
  name: string;
  type: UnifiedTypes;
  default_value?: any;
  spread?: boolean;
}

export type AccessModifier = string;

export interface Callable {
  arguments: any[];
  name: string | undefined;
  return_type: any;
}
