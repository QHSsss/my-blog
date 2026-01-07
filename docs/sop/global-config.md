---
description: VitePress 和主题的完整全局配置说明,包含所有可用的配置项和详细注释
title: ⚙️ 全局配置完整参数
readingTime: true
tag:
 - 配置
 - 文档
recommend: 2
top: 2
---

# 全局配置完整参数

> 本文档包含了 VitePress + @sugarat/theme 所有全局配置参数,配置文件位于 `.vitepress/config.mts` 和 `.vitepress/blog-theme.ts`

## 配置文件说明

- **config.mts**: VitePress 基础配置 + 站点配置
- **blog-theme.ts**: @sugarat/theme 博客主题专属配置

## 一、VitePress 基础配置

位置: `.vitepress/config.mts`

### 完整配置示例

```typescript
import { defineConfig } from 'vitepress'
import { blogTheme } from './blog-theme'

export default defineConfig({
  // ===========================
  // 基础配置
  // ===========================

  // 继承博客主题配置
  extends: blogTheme,

  // 站点语言(影响HTML的lang属性)
  lang: 'zh-CN',

  // 站点标题(显示在浏览器标签、导航栏)
  title: '我的博客',

  // 站点描述(用于SEO)
  description: '一个基于 VitePress 的个人技术博客',

  // 站点标题后缀(默认使用title)
  // titleTemplate: ':title - 我的博客',

  // 部署的基础路径(如果部署在子路径,需要配置)
  // 例如: GitHub Pages 部署在 username.github.io/blog 需要设置为 '/blog/'
  base: '/',

  // 是否显示最后更新时间(基于git提交时间)
  lastUpdated: true,

  // 是否清理URL中的.html后缀
  cleanUrls: true,

  // ===========================
  // 构建配置
  // ===========================

  // 输出目录(默认为 .vitepress/dist)
  // outDir: '../dist',

  // 缓存目录
  // cacheDir: '.vitepress/.cache',

  // 是否忽略死链接
  ignoreDeadLinks: false,

  // Markdown-it 插件配置
  // markdown: {
  //   theme: 'material-theme-palenight',
  //   lineNumbers: true,
  //   config: (md) => {
  //     // 使用更多 markdown-it 插件
  //   }
  // },

  // ===========================
  // Head 配置(HTML <head> 标签)
  // ===========================

  head: [
    // 网站图标(显示在浏览器标签上)
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // 苹果设备图标
    // ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],

    // PWA manifest
    // ['link', { rel: 'manifest', href: '/manifest.json' }],

    // 主题颜色(移动端浏览器标题栏颜色)
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],

    // Open Graph / 社交媒体分享
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:title', content: '我的博客' }],
    // ['meta', { property: 'og:description', content: '站点描述' }],
    // ['meta', { property: 'og:image', content: 'https://example.com/og-image.jpg' }],

    // Twitter Card
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { name: 'twitter:title', content: '我的博客' }],

    // 百度统计/Google Analytics 等第三方脚本
    // ['script', { src: 'https://hm.baidu.com/hm.js?xxx' }],
  ],

  // ===========================
  // 主题配置
  // ===========================

  themeConfig: {
    // ---------------------------
    // 导航栏配置
    // ---------------------------

    // 导航栏Logo
    logo: '/logo.png',

    // Logo链接
    // logoLink: '/',

    // 站点标题(显示在导航栏,不设置则使用顶层title)
    // siteTitle: '我的博客',

    // 导航菜单
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/pages/category' },
      { text: '标签', link: '/pages/tag' },
      { text: '归档', link: '/pages/archives' },

      // 下拉菜单
      {
        text: '更多',
        items: [
          { text: '关于我', link: '/about' },
          { text: '友链', link: '/friends' },
          { text: 'RSS', link: '/feed.xml' },
        ]
      },

      // 外部链接(会显示外部链接图标)
      { text: 'GitHub', link: 'https://github.com/yourusername' },
    ],

    // ---------------------------
    // 侧边栏配置
    // ---------------------------

    // 侧边栏(可以是对象或false)
    // sidebar: false, // 全局禁用侧边栏

    // 不同路径使用不同的侧边栏
    // sidebar: {
    //   '/guide/': [
    //     {
    //       text: '指南',
    //       items: [
    //         { text: '介绍', link: '/guide/' },
    //         { text: '快速开始', link: '/guide/getting-started' }
    //       ]
    //     }
    //   ],
    //   '/config/': [
    //     {
    //       text: '配置',
    //       items: [
    //         { text: '基础配置', link: '/config/basic' }
    //       ]
    //     }
    //   ]
    // },

    // ---------------------------
    // 大纲配置
    // ---------------------------

    // 右侧目录大纲
    outline: {
      level: [2, 3],        // 显示 h2 到 h3 标题
      label: '目录'          // 大纲标题
    },

    // 或者简写(只配置层级)
    // outline: [2, 3],

    // 禁用大纲
    // outline: false,

    // ---------------------------
    // 社交链接
    // ---------------------------

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' },
      { icon: 'twitter', link: 'https://twitter.com/yourusername' },
      // { icon: 'discord', link: 'https://discord.gg/xxx' },
      // { icon: 'facebook', link: 'https://facebook.com/xxx' },
      // { icon: 'instagram', link: 'https://instagram.com/xxx' },
      // { icon: 'linkedin', link: 'https://linkedin.com/in/xxx' },
      // { icon: 'youtube', link: 'https://youtube.com/@xxx' },

      // 自定义图标(SVG)
      // {
      //   icon: {
      //     svg: '<svg>...</svg>'
      //   },
      //   link: 'https://example.com'
      // }
    ],

    // ---------------------------
    // 编辑链接
    // ---------------------------

    // "编辑此页"链接配置
    editLink: {
      pattern: 'https://github.com/yourusername/repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // ---------------------------
    // 页脚配置
    // ---------------------------

    // 页脚信息(主题的footer会覆盖此配置)
    // footer: {
    //   message: '基于 MIT 许可发布',
    //   copyright: 'Copyright © 2024-present Your Name'
    // },

    // ---------------------------
    // 文档页脚导航
    // ---------------------------

    // 文档底部的"上一页/下一页"链接
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // ---------------------------
    // 搜索配置
    // ---------------------------

    // 本地搜索(VitePress内置)
    // search: {
    //   provider: 'local',
    //   options: {
    //     translations: {
    //       button: {
    //         buttonText: '搜索',
    //         buttonAriaLabel: '搜索'
    //       },
    //       modal: {
    //         noResultsText: '无法找到相关结果',
    //         resetButtonTitle: '清除查询条件',
    //         footer: {
    //           selectText: '选择',
    //           navigateText: '切换'
    //         }
    //       }
    //     }
    //   }
    // },

    // Algolia 搜索
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'YOUR_APP_ID',
    //     apiKey: 'YOUR_API_KEY',
    //     indexName: 'YOUR_INDEX_NAME',
    //     locales: {
    //       zh: {
    //         placeholder: '搜索文档',
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: '清除查询条件',
    //               resetButtonAriaLabel: '清除查询条件',
    //               cancelButtonText: '取消',
    //               cancelButtonAriaLabel: '取消'
    //             },
    //             startScreen: {
    //               recentSearchesTitle: '搜索历史',
    //               noRecentSearchesText: '没有搜索历史',
    //               saveRecentSearchButtonTitle: '保存至搜索历史',
    //               removeRecentSearchButtonTitle: '从搜索历史中移除',
    //               favoriteSearchesTitle: '收藏',
    //               removeFavoriteSearchButtonTitle: '从收藏中移除'
    //             },
    //             errorScreen: {
    //               titleText: '无法获取结果',
    //               helpText: '你可能需要检查你的网络连接'
    //             },
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换',
    //               closeText: '关闭',
    //               searchByText: '搜索提供者'
    //             },
    //             noResultsScreen: {
    //               noResultsText: '无法找到相关结果',
    //               suggestedQueryText: '你可以尝试查询',
    //               reportMissingResultsText: '你认为该查询应该有结果？',
    //               reportMissingResultsLinkText: '点击反馈'
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },

    // ---------------------------
    // 文案配置(i18n)
    // ---------------------------

    // 最后更新时间文案
    lastUpdatedText: '最后更新于',

    // 返回顶部按钮文案
    returnToTopLabel: '返回顶部',

    // 侧边栏菜单文案(移动端)
    sidebarMenuLabel: '菜单',

    // 外观切换文案
    darkModeSwitchLabel: '外观',
    darkModeSwitchTitle: '切换深色模式',
    lightModeSwitchTitle: '切换浅色模式',

    // ---------------------------
    // 移动端配置
    // ---------------------------

    // 移动端菜单图标前的文字
    // sidebarMenuLabel: '菜单',

    // 移动端返回顶部按钮文字
    // returnToTopLabel: '返回顶部',

    // ---------------------------
    // 外部链接图标
    // ---------------------------

    // 是否在外部链接旁显示外部链接图标
    // externalLinkIcon: true,

    // ---------------------------
    // 上次更新时间配置
    // ---------------------------

    // 最后更新时间显示配置
    // lastUpdated: {
    //   text: '最后更新于',
    //   formatOptions: {
    //     dateStyle: 'short',
    //     timeStyle: 'short'
    //   }
    // },
  },

  // ===========================
  // Vite 配置
  // ===========================

  // vite: {
  //   // Vite 配置选项
  //   server: {
  //     port: 5173,
  //     host: true
  //   },
  //   build: {
  //     chunkSizeWarningLimit: 2000
  //   }
  // },

  // ===========================
  // Vue 配置
  // ===========================

  // vue: {
  //   template: {
  //     compilerOptions: {
  //       // 配置 Vue 编译选项
  //     }
  //   }
  // },

  // ===========================
  // Sitemap 配置
  // ===========================

  // sitemap: {
  //   hostname: 'https://example.com',
  //   lastmodDateOnly: false
  // },
})
```

## 二、博客主题配置

位置: `.vitepress/blog-theme.ts`

### 完整配置示例

```typescript
import { getThemeConfig } from '@sugarat/theme/node'
import type { Theme } from '@sugarat/theme'

// ===========================
// RSS 配置(可选)
// ===========================

const baseUrl = 'https://yourdomain.com'

const RSS: Theme.RSSOptions = {
  // RSS标题
  title: '我的博客',

  // 站点基础URL
  baseUrl,

  // 版权信息
  copyright: 'Copyright (c) 2024-present, Your Name',

  // RSS描述
  description: '这是一个技术博客,分享前端开发经验',

  // 语言
  language: 'zh-cn',

  // RSS图标
  image: 'https://yourdomain.com/avatar.jpg',

  // 网站图标
  favicon: 'https://yourdomain.com/favicon.ico',

  // 作者信息
  // author: {
  //   name: 'Your Name',
  //   email: 'your@email.com',
  //   link: 'https://yourdomain.com'
  // },

  // 输出文件名
  // filename: 'feed.rss',

  // 限制输出文章数量
  // limit: 20,

  // 是否在RSS中包含文章封面图
  // ignoreHome: true,

  // 是否在RSS中包含文章发布日期
  // ignorePublish: false,
}

// ===========================
// 主题配置
// ===========================

const blogTheme = getThemeConfig({

  // ===========================
  // 作者信息
  // ===========================

  // 文章默认作者
  author: '你的名字',

  // ===========================
  // 评论系统配置
  // ===========================

  comment: {
    // 评论系统类型: 'giscus' | 'artalk'
    type: 'giscus',

    // Giscus 配置
    // 需要先在 GitHub 仓库安装 Giscus App: https://github.com/apps/giscus
    options: {
      repo: '用户名/仓库名',        // 格式: owner/repo
      repoId: 'your-repo-id',      // 仓库ID
      category: 'Announcements',    // 讨论分类
      categoryId: 'your-category-id', // 分类ID

      // 评论映射方式
      // 'pathname': 使用页面路径(推荐)
      // 'url': 使用完整URL
      // 'title': 使用页面标题
      // 'og:title': 使用og:title
      mapping: 'pathname',

      // 是否开启反应(点赞等)
      reactionsEnabled: true,

      // 是否开启评论输入框
      inputPosition: 'top', // 'top' | 'bottom'

      // 主题配置
      // 'light': 浅色
      // 'dark': 深色
      // 'preferred_color_scheme': 跟随系统
      theme: 'preferred_color_scheme',

      // 语言配置
      lang: 'zh-CN',

      // 是否懒加载评论
      loading: 'lazy',
    },

    // Artalk 配置(如果使用 Artalk)
    // mobileMinify: false, // 移动端是否最小化评论框
  },

  // ===========================
  // 搜索配置
  // ===========================

  // 是否开启pagefind离线全文搜索(默认开启)
  search: true,

  // 自定义搜索配置
  // search: {
  //   btnPlaceholder: '搜索',
  //   placeholder: '搜索文档',
  //   emptyText: '空空如也',
  //   heading: '共: {{searchResult}} 条结果',
  //   // 自定义搜索结果过滤
  //   // filter: (searchItem) => {
  //   //   return !searchItem.route.includes('private')
  //   // }
  // },

  // 或者完全禁用搜索
  // search: false,

  // ===========================
  // 首页配置
  // ===========================

  // 首页文章列表每页显示数量
  // pageSize: 10,

  // 首页精选文章(置顶)
  // hotArticle: {
  //   title: '🔥 精选文章',
  //   nextText: '换一组',
  //   pageSize: 9,
  //   empty: '暂无精选文章'
  // },

  // 首页推荐文章(根据 recommend 字段)
  recommend: {
    title: '🔍 推荐文章',
    nextText: '换一组',
    pageSize: 9,
    empty: '暂无推荐文章',
    // 是否展示当前正在浏览的文章在左侧
    // showSelf: true,
    // 自定义过滤
    // filter: (page) => page.frontmatter.recommend > 0
  },

  // 首页文章列表配置
  // article: {
  //   /**
  //    * 是否展示文章的预计阅读时间
  //    */
  //   readingTime: true,
  //   /**
  //    * 是否隐藏文章列表的封面展示
  //    */
  //   hiddenCover: false,
  //   /**
  //    * 全局的 alt
  //    */
  //   // coverAlt: '文章封面',
  // },

  // ===========================
  // 友链配置
  // ===========================

  friend: [
    {
      nickname: '友链名称',
      des: '友链描述',
      avatar: 'https://avatar.url',
      url: 'https://blog.url',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  // 自定义友链卡片背景图
  // friendLink: {
  //   list: [...], // 同 friend
  //   random: true, // 是否随机展示
  //   limit: 20, // 显示数量限制
  //   scrollSpeed: 10000, // 滚动速度(毫秒)
  // },

  // ===========================
  // 页脚配置
  // ===========================

  footer: {
    // 页脚信息(支持HTML)
    message: '下面的内容和图标都是可以修改的噢',

    // 版权信息
    copyright: 'MIT License | © 2024-present Your Name',

    // ICP备案信息
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },

    // 公安备案信息
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // ===========================
  // 主题色配置
  // ===========================

  // 主题色
  // 内置颜色: 'vp-default'(VitePress默认紫色) | 'vp-green' | 'vp-yellow' | 'vp-red' | 'el-blue' | 'el-yellow' | 'el-green' | 'el-red'
  themeColor: 'el-blue',

  // ===========================
  // 公告配置
  // ===========================

  popover: {
    // 公告标题
    title: '📢 公告',

    // 公告内容
    body: [
      {
        type: 'text',
        content: '欢迎来到我的博客 👋'
      },
      {
        type: 'text',
        content: '这里会分享一些技术文章和学习笔记',
        style: 'padding-top:0'
      },
      {
        type: 'image',
        src: 'https://your-qrcode-image.jpg',
        alt: '微信二维码'
      },
      {
        type: 'button',
        content: '关于我',
        link: '/about'
      },
      {
        type: 'button',
        content: 'GitHub',
        props: {
          type: 'success'
        },
        link: 'https://github.com/yourusername',
      }
    ],

    // 持续时间(毫秒),默认为0(手动关闭)
    duration: 0,

    // 是否重复显示(用户关闭后下次是否再次显示)
    // reopen: false,

    // 自定义弹窗样式
    // style: {
    //   maxWidth: '600px'
    // }
  },

  // 或者禁用公告
  // popover: false,

  // ===========================
  // RSS 配置
  // ===========================

  // 开启RSS支持
  // RSS,

  // ===========================
  // 图表支持
  // ===========================

  // 是否开启 markdown 图表支持(会增加构建耗时)
  // 需要在文章中使用 mermaid 代码块
  mermaid: false,

  // ===========================
  // 时间线配置
  // ===========================

  // 是否展示时间线
  // timeline: true,

  // ===========================
  // 标签/分类配置
  // ===========================

  // 配置标签/分类页面
  // classify: {
  //   tag: {
  //     title: '标签',
  //     empty: '暂无标签',
  //   },
  //   category: {
  //     title: '分类',
  //     empty: '暂无分类',
  //   },
  // },

  // ===========================
  // 归档页面配置
  // ===========================

  // archives: {
  //   title: '归档',
  //   empty: '暂无文章',
  // },

  // ===========================
  // 背景配置
  // ===========================

  // 全局背景图
  // background: {
  //   src: 'https://your-background-image.jpg',
  //   position: 'center',
  //   size: 'cover',
  //   repeat: 'no-repeat',
  //   opacity: 0.1
  // },

  // ===========================
  // 回到顶部按钮
  // ===========================

  // 配置回到顶部按钮
  // backToTop: {
  //   // 距离顶部多少像素时显示
  //   threshold: 300,
  //   // 是否显示阅读进度
  //   progress: true
  // },

  // ===========================
  // 看板娘配置
  // ===========================

  // Live2D 看板娘
  // oml2d: {
  //   models: [
  //     {
  //       path: 'https://model.oml2d.com/HK416-1-normal/model.json',
  //       scale: 0.08,
  //       position: [0, 60],
  //       stageStyle: {
  //         height: 450
  //       }
  //     }
  //   ]
  // },

  // ===========================
  // 统计分析
  // ===========================

  // 百度统计
  // analytics: {
  //   provider: 'baidu',
  //   options: {
  //     key: 'your-baidu-analytics-key'
  //   }
  // },

  // Google Analytics
  // analytics: {
  //   provider: 'google',
  //   options: {
  //     id: 'G-XXXXXXXXXX'
  //   }
  // },

  // ===========================
  // 文章配置
  // ===========================

  // 配置文章的全局信息(用于卡片展示等)
  // blog: {
  //   // 文章默认作者
  //   author: '你的名字',
  //   // 是否展示文章的预计阅读时间
  //   readingTime: true,
  //   // 是否隐藏文章列表的封面展示
  //   hiddenCover: false,
  //   // 分析工具
  //   // analytics: {...}
  // },

  // ===========================
  // 自定义头像
  // ===========================

  // 作者头像
  // avatar: 'https://your-avatar.jpg',

  // ===========================
  // 文章过期提醒
  // ===========================

  // 全局开启文章过期提醒(单位:天)
  // expired: {
  //   text: '本文最后更新于 {date},文中内容可能已过期,请注意甄别。',
  //   // 过期天数
  //   day: 365
  // },

  // ===========================
  // 文章版权信息
  // ===========================

  // copyright: {
  //   text: '本文采用 CC BY-NC-SA 4.0 许可协议',
  //   link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  //   icon: 'https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png',
  // },
})

export { blogTheme }
```

## 配置优先级说明

1. **文章 frontmatter** > **blog-theme.ts** > **config.mts** > **默认配置**
2. `blog-theme.ts` 中的配置优先级高于 `config.mts`
3. 文章级别的配置可以覆盖全局配置

## 常用配置组合

### 1. 最小化配置(快速开始)

```typescript
// config.mts
export default defineConfig({
  extends: blogTheme,
  lang: 'zh-CN',
  title: '我的博客',
  description: '个人技术博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ]
  }
})

// blog-theme.ts
const blogTheme = getThemeConfig({
  author: '你的名字',
  themeColor: 'el-blue',
  search: true,
})
```

### 2. 完整功能配置

```typescript
// blog-theme.ts
const blogTheme = getThemeConfig({
  // 基础信息
  author: '你的名字',

  // 评论
  comment: {
    type: 'giscus',
    options: { /* Giscus配置 */ }
  },

  // 搜索
  search: true,

  // 推荐
  recommend: {
    title: '🔍 推荐文章',
    pageSize: 9,
  },

  // 友链
  friend: [ /* 友链列表 */ ],

  // 页脚
  footer: {
    message: '页脚信息',
    copyright: '版权信息',
  },

  // 主题色
  themeColor: 'el-blue',

  // 公告
  popover: {
    title: '公告',
    body: [ /* 公告内容 */ ]
  },

  // RSS
  RSS: { /* RSS配置 */ },
})
```

## 配置生效说明

- **立即生效**: 大部分主题配置修改后刷新页面即可
- **需要重启**: 修改 `config.mts` 或 `blog-theme.ts` 后需要重启开发服务器
  ```bash
  # Ctrl+C 停止服务
  pnpm dev  # 重新启动
  ```
- **需要重新构建**: 搜索、RSS等功能需要重新构建才能生效

## 相关链接

- [@sugarat/theme 官方文档](https://theme.sugarat.top)
- [VitePress 官方文档](https://vitepress.dev)
- [Giscus 配置](https://giscus.app/zh-CN)
- [文章配置文档](./frontmatter-config.md)
