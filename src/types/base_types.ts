import { ArgumentDescription, TypeDescription, DecoratorDescription, JsDocCommentDescription } from "./index";

export interface Decorable {
  decorators?: DecoratorDescription[];
}

export interface JsDocable {
  comment?: JsDocCommentDescription[] | undefined;
}

export interface BaseArgumentParameterDescription {
  index: number;
  type: TypeDescription; // | ArgumentTypeDescription;
  has_spread?: boolean;
}
