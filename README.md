# Remax Markdown

![npm](https://img.shields.io/npm/v/remax-markdown)

Renders Markdown as pure React components, based on `react-markdown@4.3.1`, support [Remax](http://remaxjs.org/)

## Installing

```shell
npm install --save remax-markdown
# or
yarn add remax-markdown
```

## Basic usage

```jsx
import React from "react";
import RemaxMarkdown from "remax-markdown";

export default () => {
  const source = `# Title\nContent`;
  return <RemaxMarkdown source={source} />;
};
```

## APIs

APIs see [React Markdown's Documentation](https://github.com/remarkjs/react-markdown/tree/v4.3.1)

## Code highlight

Implement your render by replace default `code` render.
Default render is at [src/renderers/code.jsx](src/renderers/code.jsx)

## Preview in WeChat

![20210430150544.jpg](https://i.loli.net/2021/04/30/lt3wx5ZGjTJcgfk.jpg)
