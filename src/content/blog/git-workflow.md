---
title: 个人项目 Git 工作流
description: 一个人开发也需要规范的 Git 流程。分享一套简洁实用的个人项目管理方式。
pubDate: 2026-07-05
category: 教程
tags: [Git, 工作流, 效率工具]
---

即使是个人项目，好的 Git 习惯也能避免很多麻烦。

## 分支策略

```
main（主分支，始终可部署）
  └── feat/xxx（功能分支）
  └── fix/xxx（修复分支）
```

一个人开发不需要复杂的 Git Flow。`main` 保持稳定，新功能开分支，完成后合并回去。

## Commit 规范

采用简化的 Conventional Commits：

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat: 添加文章搜索` |
| `fix` | 修复 Bug | `fix: 修复移动端导航溢出` |
| `style` | 样式调整 | `style: 调整卡片圆角` |
| `docs` | 文档更新 | `docs: 更新部署说明` |
| `chore` | 杂项 | `chore: 升级依赖版本` |

## 常用命令速查

```bash
# 开新功能
git checkout -b feat/新功能名

# 临时保存进度
git stash

# 合并前先拉取最新
git pull --rebase origin main

# 撤销最近一次 commit（保留改动）
git reset --soft HEAD~1
```

## .gitignore 别忘了

```gitignore
node_modules/
dist/
.astro/
.env
.env.local
```

好习惯一旦养成就自然了。关键是保持一致，不要今天一个风格明天另一个。
