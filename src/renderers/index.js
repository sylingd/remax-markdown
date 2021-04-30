import ReactMarkdown from "react-markdown";
import blockFactory from "./blockFactory";
import code from "./code";
import heading from "./heading";
import image from "./image";
import { list, listItem } from "./list";
import table from "./table";
import textFactory from "./textFactory";

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
  list,
  listItem,
  table,
  image,
};

export default renderers;
