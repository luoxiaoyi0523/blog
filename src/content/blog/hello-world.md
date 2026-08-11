---
title: 你好，世界 👋
description: 这是用 Astro 搭建的个人博客的第一篇文章，演示首页列表、Markdown 渲染、分类与标签，以及评论功能。
pubDate: 2026-08-11
category: 随笔
tags: [Astro, 博客, 入门]
---

欢迎来到我的博客！这是一篇**示例文章**，用来展示这个站点的各项能力。

## 为什么要写博客

记录比记忆更可靠。把想法写出来，既能理清思路，也方便日后回看。

> 写作是最好的思考方式之一。

## 支持 Markdown

代码块带语法高亮（基于 Shiki）：

```ts
function greet(name: string): string {
  return `你好，${name}！`;
}

console.log(greet('小鱼'));
```

无序列表：

- 首页文章列表（标题 / 摘要 / 日期）
- 文章详情页（Markdown 渲染）
- 分类与标签导航
- 关于我
- 评论功能

表格也没问题：

| 功能       | 状态   |
| ---------- | ------ |
| 响应式布局 | ✅     |
| Markdown   | ✅     |
| 评论       | ✅     |

## 接下来

想发新文章，只需在 `src/content/blog/` 下新建一个 `.md` 文件，填好开头的 `frontmatter`，保存即可出现在首页。滚动到页面底部还能用 GitHub 账号留言 🐟
