---
title: CSS Grid 布局的十个实用技巧
description: 盘点日常开发中高频使用的 CSS Grid 技巧，从自适应列到子网格，帮你写出更简洁的布局代码。
pubDate: 2026-08-01
category: 技术
tags: [CSS, 前端, 布局]
---

CSS Grid 已经成为现代布局的首选方案。这里整理了十个我在项目中反复用到的技巧。

## 1. 自适应列数

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
```

不用媒体查询，容器变窄时自动减少列数。

## 2. 子网格（Subgrid）

`subgrid` 让嵌套网格的行/列与父网格对齐：

```css
.child {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

## 3. `grid-area` 命名区域

给区域起名字，语义更清晰：

```css
.layout {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

## 4. `place-items` 一行居中

```css
.center {
  display: grid;
  place-items: center;
}
```

替代 flex 居中的另一种优雅写法。

## 5. `minmax(0, 1fr)` 防止溢出

当内容比容器宽时，`1fr` 会撑破布局。用 `minmax(0, 1fr)` 强制收缩。

## 更多技巧

6. **`dense` 关键字**：让空缺位置被后续元素填充
7. **`order` 重排**：不改 HTML 顺序就能调整视觉顺序
8. **命名线**：`[start] 1fr [end]` 让代码更可读
9. **`aspect-ratio` + Grid**：保持卡片比例一致
10. **Grid 动画**：配合 `transition` 实现流畅的布局变化

Grid 的学习曲线不陡，但深度很够。建议每个前端开发者都系统掌握一遍。
