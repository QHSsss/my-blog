import { defineConfig } from "vitepress"

// 导入主题的配置
import { blogTheme } from "./blog-theme"

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: "zh-cn",
  title: "没事人的小屋",
  description: "不开心就不开心，也别勉强的慰问",
  // lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  markdown: {
    math: true,
  },

  // Vite 配置 - 增强热更新
  vite: {
    server: {
      // 监听所有地址
      host: true,

      // 端口号
      port: 5173,

      // 严格的端口号,如果端口被占用则报错而不是尝试下一个端口
      strictPort: false,

      // 热更新配置
      hmr: {
        overlay: true, // 显示错误遮罩层
      },

      // 文件监听配置
      watch: {
        // 忽略 node_modules 和 .git
        ignored: ["**/node_modules/**", "**/.git/**"],

        // 使用轮询模式(解决某些情况下文件变化检测不到的问题)
        // 注意:轮询会增加 CPU 使用率,如果热更新正常可以注释掉
        usePolling: true, // ✅ 已启用轮询模式
        interval: 1000, // 轮询间隔(毫秒)
      },
    },

    // 构建配置
    build: {
      // chunk 大小警告限制
      chunkSizeWarningLimit: 2000,
    },
  },

  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "目录",
    },
    // 默认文案修改
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "相关文章",
    lastUpdatedText: "上次更新于",

    // 设置logo
    logo: "/logo.png",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: "首页", link: "/" },
      { text: "关于作者", link: "/aboutme.html" },
      { text: "Aigc", link: "https://aigc.xgood.xz.cn" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/QHSsss",
      },
    ],
  },
})
