import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署到 GitHub Pages 时：
//   1) 把 site 改成你的站点地址，例如 https://<user>.github.io/<repo>/
//   2) 如果是「项目页」（仓库名不是 <user>.github.io），取消下行 base 注释并改成你的仓库名
//      base: '/<repo>/',
//   个人页（<user>.github.io）则保留 base 为注释即可。
export default defineConfig({
  site: 'https://luoxiaoyi0523.github.io/blog/',
  base: '/blog/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
