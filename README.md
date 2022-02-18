## Install
```
npm i antd-tag-input
// or
yarn add antd-tag-input
```

## Usage
```js
import TagInput from 'antd-tag-input';
import 'antd-tag-input/dist/style.css';
```

## Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容 | string[] | [] |
| onChange | 输入框内容变化时的回调 | (value: string[]) => void | - |
| className | 类名 | string | - |
| style | 内敛样式 | React.CSSProperties => void | - |