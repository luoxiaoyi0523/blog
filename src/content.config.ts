import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 文章集合：每篇文章是 src/content/blog/ 下的一个 .md / .mdx 文件。
// frontmatter 会按下面的 schema 做类型校验，写错字段构建时会报错。
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),                 // 首页列表显示的摘要
    pubDate: z.coerce.date(),                // 发布日期
    updatedDate: z.coerce.date().optional(), // 更新日期（可选）
    category: z.string().default('未分类'),  // 单个分类
    tags: z.array(z.string()).default([]),   // 多个标签
    draft: z.boolean().default(false),       // true 时生产构建跳过
  }),
});

export const collections = { blog };
