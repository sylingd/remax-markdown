import { Image } from "@remax/one";
import classNames from "classnames";
import React from "react";

function getAbsUrl(url) {
  if (url.startsWith("//")) {
    return "https:" + url;
  }
  return url;
}

const image = (props) => {
  const [maxStyle, setMaxStyle] = React.useState({});

  const handleLoad = React.useCallback((e) => {
    const { detail } = e.nativeEvent;
    if (detail) {
      setMaxStyle({
        maxHeight: `${detail.height}px`,
        maxWidth: `${detail.width}px`,
      });
    }
  }, []);

  const cls = classNames("h5-img", props.className);

  return (
    <Image
      {...props}
      src={getAbsUrl(props.src)}
      style={maxStyle}
      onLoad={handleLoad}
      className={cls}
      mode="widthFix"
    />
  );
};

export default image;
