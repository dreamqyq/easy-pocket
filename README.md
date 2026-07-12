## 项目介绍

<img src="public/favicon.ico" width="50" alt="Easy Pocket"/>

Easy Pocket，基于 React 技术栈实现的简易记账项目。

### 项目预览（手机扫码查看）

<img src="src/static/qrcode.png" width="200" alt="https://dreamqyq.github.io/easy-pocket/" />

预览地址：https://dreamqyq.github.io/easy-pocket/

### 当前版本 V0.3.0

项目主要技术栈包括：React 18、TypeScript 5、Vite 6、React-Router、React Hook、styled-components 等。可实现基本的记账功能以及数据保存功能（数据保存基于 localStorage）。

## 项目运行命令

- 启动

  `npm start`

- 构建

  `npm run build`

- 预览构建产物

  `npm run preview`

- 部署

  `npm run deploy`

## 版本历史

### V0.3.0 — 迁移到 Vite 6 + React 18

- 构建工具从 Webpack 4 迁移到 Vite 6
- React 升级到 18.3，使用 `createRoot` API
- TypeScript 升级到 5.6
- ECharts 升级到 5.x，采用按需引入 tree-shaking
- 移除 CRA 遗留的 config/ scripts/ 目录
- SVG 图标系统适配 Vite 的 import.meta.glob
- 新增暗色模式（CSS 变量 + localStorage 持久化 + 跟随系统偏好）
- 依赖精简，构建速度大幅提升

### V0.2.0 — 账单编辑功能

- 统计页面-编辑/删除已有的记录

### 新版计划及进度（V0.3.0+）WIP

- [ ] 增加关于界面（项目信息，项目推广等）
- [ ] 「记一笔」按钮独立悬浮，在任意界面点击即可记账
- [ ] 收入、支出界面-增加左右滑动事件及动画效果
