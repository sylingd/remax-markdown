import React from "react";
import ReactMarkdown from "react-markdown";
import renderers from "./renderers";
import './index.css';

const RemaxMarkdown = (props) => {
  const newRenderers = props.renderers
    ? {
        ...renderers,
        ...props.renderers,
      }
    : renderers;

  return <ReactMarkdown {...props} renderers={newRenderers} />;
};

export default RemaxMarkdown;
