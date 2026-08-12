---
title: 我的 VS Code 配置分享
description: 从插件到快捷键，一套适合前端开发的 VS Code 环境配置，提升编码效率。
pubDate: 2026-07-28
category: 教程
tags: [VS Code, 前端, 效率工具]
---

VS Code 是我每天用得最多的编辑器。经过两年多的打磨，这套配置已经相当顺手。

## 必装插件

| 插件 | 用途 |
|------|------|
| Astro | Astro 项目语法高亮与补全 |
| Error Lens | 行内显示错误信息 |
| GitLens | 增强 Git 可视化 |
| Prettier | 保存自动格式化 |
| Thunder Client | API 测试（替代 Postman） |

## 快捷键自定义

几个我改过的常用快捷键：

- `Cmd+Shift+P` → 打开命令面板（默认）
- `Cmd+B` → 切换侧边栏
- `Cmd+\` → 分屏编辑器
- `Alt+↑/↓` → 移动当前行

## 设置片段

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}
```

## 主题

目前用的是 **One Dark Pro** 深色主题 + **Material Icon Theme** 图标。深色背景长时间写代码眼睛不容易累。

好的工具配置能显著提升开发体验。建议每隔一段时间回顾一下自己的配置，把不常用的清理掉。
