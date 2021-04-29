import { View } from "@remax/one";
import React from "react";

const blockFactory = (name) => {
  const res = (props) => {
    return <View className={`h5-${name}`}>{props.children}</View>;
  };

  return res;
};

export default blockFactory;

