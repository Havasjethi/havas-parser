import { DecoratorDescription, JsDocable, ParameterDescription, TypeDescription, UnifiedModifier } from "./index";

export interface ClassDescription extends JsDocable {
  name: string | undefined;
  generic_types?: {
    type_name: string;
    extends: string[];
  };
  extended_class?: ClassExtender;
  interfaces: ClassExtender[];
  decorators: DecoratorDescription[];
  properties: PropertyDescription[];
  accessors?: AccessorDescription[];
  methods: MethodDescription[];
}

/**
 * Contains implemented interfaces and extended class
 * Note: This doesn't display values from default values
 */
export interface ClassExtender {
  class_name: string,
  generics: undefined | { name: string, index: string }[];
}

export interface PropertyDescription extends JsDocable {
  name: string;
  type?: TypeDescription;
  has_initializer?: boolean;
  access_modifier?: UnifiedModifier[];
  decorators?: DecoratorDescription[];
}


export type AccessorDescription = {
  type: 'Get' | 'Set';
  name: string;
  access_modifiers?: UnifiedModifier[];
};


export interface MethodDescription extends JsDocable {
  access_modifiers?: UnifiedModifier[];
  name: string;
  decorators?: DecoratorDescription[];
  parameters: ParameterDescription[];
  return_value: TypeDescription;
}

