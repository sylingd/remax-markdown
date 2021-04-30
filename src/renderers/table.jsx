import React from "react";
import { isWeb } from "universal-env";

const table = (props) => {
  if (isWeb) {
    return <table>{props.children}</table>;
  } else {
    // 小程序暂时不支持table
    return null;
  }
};

export default table;
