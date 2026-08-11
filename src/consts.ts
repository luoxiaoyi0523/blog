// 全站配置集中在此，改一处即可全局生效。
// 发布文章不需要动这个文件，只有改站点信息/导航/Giscus 时才改。

export const SITE = {
  title: '鱼板的自留地',
  tagline: '记录技术、生活与胡思乱想',
  description: '一个用 Astro 搭建的个人博客，分享前端、效率工具与日常随笔。',
  author: '鱼板',
  email: 'fish@example.com',
  lang: 'zh-CN',
  // 每页文章数（首页分页用）
  pageSize: 8,
};

// 顶部导航。想加栏目就往这里加一项。
export const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/photos/', label: '摄影' },
  { href: '/categories/', label: '分类' },
  { href: '/tags/', label: '标签' },
  { href: '/about/', label: '关于' },
  { href: '/rss.xml', label: 'RSS' },
];

// 分类配色：给文章卡片顶部色条 / 分类徽章一个主题色，视觉更丰富。
// 没列出的分类会回退到 accent 蓝。
export const CATEGORY_COLORS: Record<string, string> = {
  '技术': '#0ea5e9',
  '生活': '#f59e0b',
  '摄影': '#ec4899',
  '随笔': '#8b5cf6',
  '教程': '#10b981',
};

export function categoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? '#0ea5e9';
}

// 页脚社交链接
export const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/' },
];

// Giscus 评论配置。
// 配置步骤：
//   1) GitHub 仓库开启 Discussions（Settings → Features → Discussions）
//   2) 访问 https://giscus.app ，按提示填写仓库，生成配置代码
//   3) 把下面的 repo / repoId / categoryId 等填好
// 未填时，文章页会显示「评论待配置」提示，不影响构建与发布。
export const GISCUS = {
  repo: '', // 例如 'your-name/your-repo'
  repoId: '',
  category: 'Comments',
  categoryId: '',
  mapping: 'pathname',
  reactionsEnabled: true,
  theme: 'light',
  lang: 'zh-CN',
};
