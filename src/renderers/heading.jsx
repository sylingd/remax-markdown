import { View } from "@remax/one";
import React from "react";

const heading = (props) => {
  return <View className={`h5-h${props.level}`}>{props.children}</View>;
};

export default heading;
