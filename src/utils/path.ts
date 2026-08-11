// 统一处理站内链接的 base 前缀。
// 站点部署在 GitHub Pages 项目页，线上地址带 /blog/ 后缀（astro.config.mjs 的 base）。
// 所有「内部」链接都必须经过 withBase()，否则会指向错误地址导致 404。
// 外部链接（http(s)://、mailto:、#锚点）不要用它。
export const BASE = import.meta.env.BASE_URL; // 例如 '/blog/'

export function withBase(path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return BASE + clean;
}
