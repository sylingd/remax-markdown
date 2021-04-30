import { View } from "@remax/one";
import React from "react";
import { isWeb } from "universal-env";

export function list(props) {
  return (
    <View className={`h5-${props.ordered ? "ol" : "ul"}`}>
      {props.children}
    </View>
  );
}

export function listItem(props) {
  let checkbox = null;
  if (props.checked !== null && props.checked !== undefined) {
    const checked = props.checked;
    if (isWeb) {
      checkbox = <input type="checkbox" checked={checked} readOnly />;
    } else {
      checkbox = <checkbox checked={checked} />;
    }
  }
  return (
    <View className="h5-li">
      {checkbox}
      {props.children}
    </View>
  );
}
