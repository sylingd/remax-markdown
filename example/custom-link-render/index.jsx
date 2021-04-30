import { Text } from "@remax/one";
import React from "react";
import { navigateTo, setClipboardData, showToast } from "remax/wechat";

const copyLink = async (link) => {
  await setClipboardData({
    data: link,
  });
  showToast({
    title: "Link copied",
    icon: "success",
    duration: 2000,
  });
};

const LinkRender = (props) => {
  const { href, children } = props;
  // should handle by this mini program
  const match = href.match(/view\.php\?id=(\d+)/);
  if (match) {
    return (
      <Text
        className="h5-a"
        onTap={() =>
          navigateTo({
            url: "/pages/view/index?id=" + match[1],
          })
        }
      >
        {children}
      </Text>
    );
  }
  return (
    <Text className="h5-a" onTap={() => copyLink(href)}>
      {children}
    </Text>
  );
};

const Home = () => {
  const source = `
[Link handle by this mini program](https://www.example.org/view.php?id=123)
[Copy this link](https://remaxjs.org)
`;
  const renders = {
    link: LinkRender,
  };
  return <RemaxMarkdown source={source} renderers={renders} />;
}

export default Home;
