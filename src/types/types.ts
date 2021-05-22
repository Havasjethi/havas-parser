import { BaseArgumentParameterDescription, ClassDescription, Decorable, JsDocable, UnifiedTypes } from "./index";

export interface DecoratorDescription {
  name?: string;
  parameters: ArgumentDescription[];
}

export interface ArgumentDescription extends BaseArgumentParameterDescription {
  type: TypeDescription;
  value?: any;
}

export interface ParameterDescription extends BaseArgumentParameterDescription, Decorable, JsDocable {
  type: TypeDescription;
  name: string;
  default_value?: any;
}

export interface TypeDescription {
  type: UnifiedTypes;
  types?: TypeDescription[];
  name?: string;
  wildcard?: boolean;
}

export interface FileDeclarations {
  class_declarations: ClassDescription[];
}
