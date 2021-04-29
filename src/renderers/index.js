import ReactMarkdown from "react-markdown";
import code from "./code";
import heading from "./heading";
import textFactory from "./textFactory";
import blockFactory from "./blockFactory";

const renderers = {
  ...ReactMarkdown.renderers,
  heading,
  code,
  paragraph: blockFactory("p"),
  break: blockFactory("br"),
  thematicBreak: blockFactory("hr"),
  strong: textFactory("strong"),
  delete: textFactory("del"),
  link: textFactory("a"),
  linkReference: textFactory("a"),
  emphasis: textFactory("em"),
  inlineCode: textFactory("code"),
};

export default renderers;
