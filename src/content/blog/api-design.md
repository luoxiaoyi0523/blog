---
title: 设计一个好用的 RESTful API
description: 从命名规范到错误处理，总结 API 设计中的最佳实践，让你的接口更友好。
pubDate: 2026-05-10
category: 技术
tags: [API, 后端, 设计]
---

好的 API 设计能让前后端协作效率翻倍。这里整理了一些核心原则。

## URL 命名

```
✅ GET    /articles          # 获取文章列表
✅ GET    /articles/123      # 获取单篇文章
✅ POST   /articles          # 创建文章
✅ PUT    /articles/123      # 更新文章
✅ DELETE /articles/123      # 删除文章

❌ GET    /getArticles
❌ POST   /article/create
❌ GET    /article?id=123
```

**原则**：用名词复数，不用动词；用 HTTP 方法表达动作。

## 响应格式

统一的标准响应结构：

```json
{
  "code": 0,
  "message": "success",
  "data": { ... }
}
```

出错时：

```json
{
  "code": 40001,
  "message": "参数校验失败：标题不能为空",
  "data": null,
  "errors": [
    { "field": "title", "message": "不能为空" }
  ]
}
```

## 分页

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 128,
    "hasMore": true
  }
}
```

`hasMore` 比计算总页数更实用——前端只需要知道「有没有下一页」。

## 版本控制

URL 中带版本号：

```
/api/v1/articles
/api/v2/articles
```

不要在 Header 里放版本号，不方便调试和缓存。

## 文档

API 文档不是可选项。推荐使用 **OpenAPI (Swagger)** 规范，配合 **Swagger UI** 提供交互式文档。

> 好的 API 是自解释的。如果需要大量文档才能让调用者理解，那设计可能有问题。
