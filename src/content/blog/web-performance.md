---
title: 前端性能优化实战笔记
description: 从 Lighthouse 分数 60 到 95 的优化之路，记录实际项目中遇到的问题和解决方案。
pubDate: 2026-06-20
category: 技术
tags: [性能, 前端, 优化]
---

最近给一个项目做性能优化，Lighthouse 分数从 60 提升到了 95。记录一下关键步骤。

## 问题诊断

先用 Lighthouse 和 DevTools 找瓶颈：

1. **FCP 2.8s** → 首屏渲染慢
2. **LCP 4.1s** → 最大内容绘制太晚
3. **CLS 0.15** → 布局偏移
4. **打包体积 890KB** → JS 太大

## 优化措施

### 图片优化（效果最明显）

```astro
// 用 Astro 的 Image 优化
import { Image } from 'astro:assets';

<Image src={heroImage} width={1200} height={630} format="webp" quality={80} />
```

原图 2MB → 优化后 45KB，LCP 直接降了 1.5s。

### 字体优化

```css
@font-face {
  font-family: 'Custom';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* 关键：防止 FOIT */
}
```

`font-display: swap` 让文字先显示系统字体，自定义字体加载后替换，避免白屏。

### 代码分割

Astro 默认零 JS，但交互组件需要 JS 时：

```astro
<!-- 按需加载 -->
<Slider client:load />
```

用 `client:load` / `client:visible` / `client:idle` 控制加载时机。

## 结果

| 指标 | 优化前 | 优化后 |
|------|--------|--------|
| FCP | 2.8s | 1.1s |
| LCP | 4.1s | 1.8s |
| CLS | 0.15 | 0.02 |
| 打包体积 | 890KB | 120KB |

性能优化不需要一步到位。找到最大的瓶颈先解决它，收益往往最高。
