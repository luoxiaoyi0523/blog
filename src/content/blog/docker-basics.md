---
title: Docker 入门：五分钟跑通第一个容器
description: 不需要 Linux 基础也能学会 Docker 基础概念。从安装到部署一个 Web 应用，手把手教程。
pubDate: 2026-04-20
category: 教程
tags: [Docker, 后端, 入门]
---

Docker 听起来很高大上，但核心概念其实很简单。

## 什么是 Docker

把应用和它需要的所有依赖打包到一个「容器」里。不管在哪台机器上运行，行为都一样。

类比：**容器 = 带家具的房间**，**虚拟机 = 整栋房子**。容器更轻量。

## 安装

```bash
# Windows / Mac
# 直接下载 Docker Desktop 安装即可

# Ubuntu
curl -fsSL https://get.docker.com | sudo sh
```

## 第一个容器

```bash
# 拉取镜像（相当于下载模板）
docker pull nginx

# 运行容器（基于 nginx 镜像启动）
docker run -d -p 8080:80 nginx
```

打开浏览器访问 `http://localhost:8080`，看到 Nginx 欢迎页就成功了！

## 常用命令速查

```bash
docker ps              # 查看运行中的容器
docker images          # 查看本地镜像
docker stop <容器ID>    # 停止容器
docker rm <容器ID>      # 删除容器
docker logs -f <容器ID> # 查看日志
```

## Dockerfile

用配置文件定义如何构建镜像：

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
# 构建镜像
docker build -t my-app .

# 运行
docker run -d -p 3000:3000 my-app
```

## 为什么前端也要学 Docker

- 统一开发环境（不再有「我电脑上能跑」的问题）
- 部署简单（一条 `docker run` 就能启动）
- CI/CD 友好（GitHub Actions 原生支持）

Docker 的学习曲线前 10% 很平缓，足够应付日常使用。深入之后再学 Kubernetes 也不迟。
