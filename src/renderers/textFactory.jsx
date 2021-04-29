import { Text } from "@remax/one";
import React from "react";

const textFactory = (name) => {
  const res = (props) => {
    return <Text className={`h5-${name}`}>{props.children}</Text>;
  };

  return res;
};

export default textFactory;
