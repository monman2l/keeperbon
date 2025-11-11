# Hello React

极简的 Vite + React “Hello World” 示例，内置 Tailwind CSS，方便直接继续开发。

## 样式

- Tailwind 已配置好 `tailwind.config.js` 与 `postcss.config.js`，可以直接在 `src/**/*.jsx` 中使用实用类。
- 全局样式入口在 `src/index.css`，包含 `@tailwind base/components/utilities` 以及少量基础定制。
- 如需扩展主题（颜色、字体等），修改 `tailwind.config.js` 的 `theme.extend`。

## 开发

```bash
yarn install
yarn dev
```

## 构建与预览

```bash
yarn build
yarn preview
```

> 项目当前锁定在 Vite 5，兼容 Node.js 18+。如果你升级到 Node.js 20 或 22，可以自行提升 Vite 版本。
