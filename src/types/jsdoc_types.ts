
export interface JsDocCommentDescription {
  comment: string;
  tags: TagDescription[]
}

export interface TagDescription {
  comment: string;
  tag: string;
  extra_value: string;
}
