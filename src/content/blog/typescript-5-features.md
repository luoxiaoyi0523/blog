---
title: TypeScript 5 新特性速览
description: TypeScript 5 带来了装饰器标准化、const 类型参数等重磅更新，本文快速过一遍最实用的变化。
pubDate: 2026-07-15
category: 技术
tags: [TypeScript, 前端, 入门]
---

TypeScript 5 是一次大版本更新，有不少值得关注的新特性。

## 装饰器正式标准化

终于不用 `experimentalDecorators` 了：

```ts
function logged(target: any, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log(`${String(context.name)} called`);
    return target.call(this, ...args);
  };
}

class Greeter {
  @logged
  greet(name: string) {
    return `Hello, ${name}!`;
  }
}
```

新装饰器 API 更类型安全，支持更多使用场景。

## const 类型参数

```ts
function routes<const T extends string[]>(paths: T): T {
  return paths;
}
// 返回类型是 readonly ["home", "about"]，不是 string[]
const r = routes(["home", "about"]);
```

`as const` 的能力直接内置到了泛型参数中。

## 其他亮点

- **`@import` 类型导入**：用 ES import 语法导入类型，不再需要 `import type`
- **性能提升**：构建和增量编译速度显著加快
- **ECMAScript 装饰器**：与 TC39 标准对齐

建议尽快升级到 TS 5，体验提升很明显。
