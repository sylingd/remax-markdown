import { FunctionComponent } from "react";
import {
  AlignType,
  LinkTargetResolver,
  NodeType,
  ReactMarkdownProps,
  ReferenceType,
  Renderers,
  RenderProps,
  uriTransformer as reactUriTransformer,
} from "react-markdown";

type RemaxMarkdownProps = ReactMarkdownProps;

declare const RemaxMarkdown: FunctionComponent<RemaxMarkdownProps>;

declare namespace RemaxMarkdown {
  export {
    NodeType,
    AlignType,
    ReferenceType,
    LinkTargetResolver,
    RemaxMarkdownProps,
    RenderProps,
  };
  export var types: NodeType[];
  export var renderers: Renderers;
  export var uriTransformer: typeof reactUriTransformer;
}

export = RemaxMarkdown;
