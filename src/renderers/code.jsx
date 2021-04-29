import { View, Text } from "@remax/one";
import React from "react";
import classNames from "classnames";

const code = (props) => {
  return (
    <View className="h5-pre">
      <Text
        className={classNames(
          "h5-code",
          props.language && `language-${props.language}`
        )}
      >
        {props.value}
      </Text>
    </View>
  );
};

export default code;
