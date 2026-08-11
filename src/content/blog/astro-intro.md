---
title: 用 Astro 搭博客有多省事
description: 聊一聊 Astro 的内容集合（Content Collections）与内容层 API，为什么它非常适合做个人博客。
pubDate: 2026-08-09
updatedDate: 2026-08-10
category: 技术
tags: [Astro, 前端, 静态站点]
---

做个人博客，最怕两件事：**写文章麻烦**和**维护成本高**。Astro 的内容集合恰好把这两件事都解决了。

## 内容集合是什么

简单说，就是把一组结构相同的 Markdown 文件当成“数据库”来管理。

```ts
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
  }),
});
```

- `glob` loader 自动把目录下的 `.md` 收集成集合
- `schema` 用 Zod 做类型校验，写错 frontmatter 构建直接报错
- 取数据时一个 `getCollection('blog')` 就拿到全部文章

## 发布一篇文章

1. 在 `src/content/blog/` 新建 `my-post.md`
2. 填好 frontmatter（标题、日期、分类、标签）
3. 写正文，保存

列表页、分类页、标签页全部自动生成，无需手动维护导航。

## 小结

对于“想专注写作、又想要现代体验”的个人站点，Astro 是目前很省心的选择。零运行时 JS，加载飞快，部署到 GitHub Pages 也只要一个工作流文件。
