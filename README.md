# Hello React

极简的 Vite + React “Hello World” 示例，内置 Tailwind CSS，并配置了基础路由（Home / Contact Us），方便直接继续开发。

## 样式

- Tailwind 已配置好 `tailwind.config.js` 与 `postcss.config.js`，可以直接在 `src/**/*.jsx` 中使用实用类。
- 全局样式入口在 `src/index.css`，包含 `@tailwind base/components/utilities` 以及少量基础定制。
- 如需扩展主题（颜色、字体等），修改 `tailwind.config.js` 的 `theme.extend`。

## 路由与页面

- `src/app/App.jsx` 使用 `createBrowserRouter` + `RouterProvider` 管理路由树。
- 页面放在 `src/pages/*` 下，目前包含：
  - `pages/home/HomePage.jsx`：默认首页，展示项目信息。
  - `pages/contact/ContactPage.jsx`：联系页面示例。
- 新增页面时可在 `src/pages/<name>` 创建组件，并在 `src/app/App.jsx` 的路由配置数组中注册。
- `src/components/layout/RootLayout.jsx` 负责全局布局（导航、页脚、`<Outlet />`），`App.jsx` 仅关注路由配置。

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
