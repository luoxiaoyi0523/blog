---
title: 记第一次给开源项目提 PR
description: 从 fork 到合并，记录一个新手给开源社区贡献代码的完整过程。
pubDate: 2026-05-03
category: 随笔
tags: [开源, GitHub, 成长]
---

一直想参与开源但不知道从哪里开始。上周末终于迈出了第一步。

## 起因

在用一个流行的 UI 组件库时发现了一个小 bug：某个属性的类型定义和实际行为不一致。文档里写的是 `string`，但实际接受的是 `number`。

问题不大，修起来也就一行代码。但我犹豫了很久——**我真的可以给开源项目提 PR 吗？**

## 过程

### 1. Fork + Clone

```bash
git clone https://github.com/my-username/目标仓库.git
cd 目标仓库
git checkout -b fix/typo-in-prop-type
```

### 2. 改代码

把 `string` 改成 `string | number`，加了一行注释说明原因。

### 3. 提交

```bash
git add .
git commit -m "fix: correct type definition for xxx prop (closes #123)"
```

commit message 遵循了项目的规范格式。

### 4. Push + 创建 PR

在 GitHub 网页上点 New Pull Request，填写了：

- **标题**：简洁描述改动
- **正文**：说明 bug 是什么、怎么复现、我的修复方案
- **关联 Issue**：`Fixes #123`

## 结果

提交后两小时就收到了维护者的回复：「Good catch, thanks! 🎉」

被合并的那一刻真的很开心。虽然只是一行代码的改动，但感觉自己和这个项目产生了真实的连接。

## 收获

1. **开源没那么可怕**：维护者通常很欢迎贡献者
2. **从小处开始**：修 typo、补文档、改注释都是好的起点
3. **遵循规范**：每个项目的贡献指南（CONTRIBUTING.md）一定要看

> 你的下一个 PR 可能就是别人「入坑」开源的契机。

如果你也在犹豫，今天就 fork 一个你常用的项目吧。哪怕只是改个错别字。
