/**
 * @sugarat/theme 博客主题配置文件
 *
 * 所有配置项详见文档: https://theme.sugarat.top/
 * 配置说明文档: docs/sop/global-config.md
 */

import { getThemeConfig } from '@sugarat/theme/node'
import type { Theme } from '@sugarat/theme'

// ===========================
// RSS 配置(可选功能)
// ===========================

const baseUrl = 'https://yourdomain.com' // 修改为你的站点域名

// RSS订阅配置
const RSS: Theme.RSSOptions = {
  title: '我的博客',                                    // RSS标题
  baseUrl,                                              // 站点基础URL
  copyright: 'Copyright (c) 2024-present, Your Name',  // 版权信息
  description: '技术博客,分享前端开发经验',              // RSS描述
  language: 'zh-cn',                                    // 语言
  image: 'https://yourdomain.com/avatar.jpg',           // RSS图标
  favicon: 'https://yourdomain.com/favicon.ico',        // 网站图标
  // author: {                                          // 作者信息(可选)
  //   name: 'Your Name',
  //   email: 'your@email.com',
  //   link: 'https://yourdomain.com'
  // },
  // filename: 'feed.rss',                              // 输出文件名(默认feed.rss)
  // limit: 20,                                         // 限制输出文章数量
}

// ===========================
// 主题配置
// ===========================

const blogTheme = getThemeConfig({

  // ---------------------------
  // 作者信息
  // ---------------------------

  // 文章默认作者(可在文章frontmatter中覆盖)
  author: '你的名字',

  // ---------------------------
  // 搜索功能
  // ---------------------------

  // pagefind 离线全文搜索(默认开启)
  // 如果使用其他搜索方案(如 Algolia),可以设置为 false
  search: true,

  // 自定义搜索配置
  // search: {
  //   btnPlaceholder: '搜索',           // 搜索按钮文字
  //   placeholder: '搜索文档',          // 搜索框占位符
  //   emptyText: '空空如也',            // 无结果时的提示
  //   heading: '共: {{searchResult}} 条结果', // 结果标题
  //   // 自定义搜索结果过滤
  //   // filter: (searchItem) => {
  //   //   return !searchItem.route.includes('private')
  //   // }
  // },

  // 完全禁用搜索
  // search: false,

  // ---------------------------
  // 评论系统
  // ---------------------------

  // 评论系统配置(可选: 'giscus' | 'artalk')
  // comment: {
  //   // 使用 Giscus (基于 GitHub Discussions)
  //   type: 'giscus',
  //   options: {
  //     repo: '用户名/仓库名',                // GitHub 仓库(格式: owner/repo)
  //     repoId: 'your-repo-id',             // 仓库 ID (在 giscus.app 获取)
  //     category: 'Announcements',          // 讨论分类
  //     categoryId: 'your-category-id',     // 分类 ID (在 giscus.app 获取)
  //     mapping: 'pathname',                // 评论映射方式: 'pathname' | 'url' | 'title' | 'og:title'
  //     reactionsEnabled: true,             // 是否启用反应(点赞等)
  //     inputPosition: 'top',               // 评论输入框位置: 'top' | 'bottom'
  //     theme: 'preferred_color_scheme',    // 主题: 'light' | 'dark' | 'preferred_color_scheme'
  //     lang: 'zh-CN',                      // 语言
  //     loading: 'lazy',                    // 加载方式: 'lazy' | 'eager'
  //   },
  //   // 移动端是否最小化评论框(仅 Artalk)
  //   // mobileMinify: false,
  // },

  // ---------------------------
  // Mermaid 图表支持
  // ---------------------------

  // 是否启用 Mermaid 图表(默认关闭,开启会增加构建耗时)
  // 开启后可以在 markdown 中使用 mermaid 代码块绘制流程图、时序图等
  mermaid: false,

  // ---------------------------
  // 首页配置
  // ---------------------------

  // 首页文章列表每页显示数量
  // pageSize: 10,

  // 首页推荐文章配置(根据文章 frontmatter 的 recommend 字段)
  recommend: {
    title: '🔍 推荐文章',      // 推荐区域标题
    nextText: '换一组',        // 换一组按钮文字
    pageSize: 9,              // 每次显示数量
    empty: '暂无推荐文章',     // 无推荐文章时的提示
    // showSelf: true,        // 是否展示当前正在浏览的文章
    // 自定义过滤逻辑
    // filter: (page) => page.frontmatter.recommend > 0
  },

  // 首页精选文章(置顶文章)
  // hotArticle: {
  //   title: '🔥 精选文章',
  //   nextText: '换一组',
  //   pageSize: 9,
  //   empty: '暂无精选文章'
  // },

  // 首页文章列表配置
  // article: {
  //   readingTime: true,     // 是否展示预计阅读时间
  //   hiddenCover: false,    // 是否隐藏封面图片
  //   // coverAlt: '文章封面', // 全局封面图的 alt 文本
  // },

  // ---------------------------
  // 友情链接
  // ---------------------------

  friend: [
    {
      nickname: 'VitePress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
    {
      nickname: '@sugarat/theme',
      des: '简约风的 VitePress 博客主题',
      avatar: 'https://theme.sugarat.top/logo.png',
      url: 'https://theme.sugarat.top/',
    },
    // 添加更多友链...
  ],

  // 自定义友链卡片配置
  // friendLink: {
  //   list: [...],          // 同 friend
  //   random: true,         // 是否随机展示
  //   limit: 20,            // 显示数量限制
  //   scrollSpeed: 10000,   // 滚动速度(毫秒)
  // },

  // ---------------------------
  // 页脚配置
  // ---------------------------

  footer: {
    // 页脚信息(支持 HTML 内容,可配置为数组显示多条)
    message: '欢迎来到我的博客',

    // 版权信息
    copyright: 'MIT License | © 2024-present Your Name',

    // ICP 备案信息(中国大陆网站需要)
    // icpRecord: {
    //   name: '蜀ICP备xxxxxxxx号',
    //   link: 'https://beian.miit.gov.cn/'
    // },

    // 公安备案信息(中国大陆网站需要)
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // ---------------------------
  // 主题色配置
  // ---------------------------

  // 主题颜色(影响链接、按钮等元素的颜色)
  // 内置颜色:
  // - 'vp-default': VitePress 默认紫色
  // - 'vp-green': VitePress 绿色
  // - 'vp-yellow': VitePress 黄色
  // - 'vp-red': VitePress 红色
  // - 'el-blue': Element Plus 蓝色
  // - 'el-yellow': Element Plus 黄色
  // - 'el-green': Element Plus 绿色
  // - 'el-red': Element Plus 红色
  themeColor: 'el-blue',

  // ---------------------------
  // 公告弹窗
  // ---------------------------

  popover: {
    title: '📢 公告',          // 公告标题
    body: [
      {
        type: 'text',
        content: '👋 欢迎来到我的博客!'
      },
      {
        type: 'text',
        content: '这里会分享一些技术文章和学习笔记',
        style: 'padding-top:0'
      },
      // 图片类型
      // {
      //   type: 'image',
      //   src: 'https://your-image-url.jpg',
      //   alt: '图片描述'
      // },
      // 按钮类型
      {
        type: 'button',
        content: '关于我',
        link: '/about'
      },
      {
        type: 'button',
        content: 'GitHub',
        props: {
          type: 'success'    // 按钮类型: 'default' | 'primary' | 'success' | 'warning' | 'danger'
        },
        link: 'https://github.com/yourusername',
      }
    ],
    duration: 0,              // 持续时间(毫秒), 0 表示手动关闭
    // reopen: false,         // 用户关闭后是否再次显示
    // style: {               // 自定义弹窗样式
    //   maxWidth: '600px'
    // }
  },

  // 禁用公告
  // popover: false,

  // ---------------------------
  // RSS 订阅
  // ---------------------------

  // 开启 RSS 订阅支持(需要先配置上面的 RSS 对象)
  // RSS,

  // ---------------------------
  // 标签/分类配置
  // ---------------------------

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

  // ---------------------------
  // 归档页面配置
  // ---------------------------

  // archives: {
  //   title: '归档',
  //   empty: '暂无文章',
  // },

  // ---------------------------
  // 时间线配置
  // ---------------------------

  // 是否展示时间线页面
  // timeline: true,

  // ---------------------------
  // 背景配置
  // ---------------------------

  // 全局背景图配置
  // background: {
  //   src: 'https://your-background-image.jpg',  // 背景图片 URL
  //   position: 'center',                        // 背景位置
  //   size: 'cover',                             // 背景大小
  //   repeat: 'no-repeat',                       // 是否重复
  //   opacity: 0.1                               // 透明度
  // },

  // ---------------------------
  // 回到顶部按钮
  // ---------------------------

  // backToTop: {
  //   threshold: 300,        // 距离顶部多少像素时显示按钮
  //   progress: true         // 是否显示阅读进度
  // },

  // ---------------------------
  // Live2D 看板娘
  // ---------------------------

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

  // ---------------------------
  // 统计分析
  // ---------------------------

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

  // ---------------------------
  // 文章过期提醒
  // ---------------------------

  // 全局开启文章过期提醒(文章超过指定天数未更新时显示提示)
  // expired: {
  //   text: '本文最后更新于 {date},文中内容可能已过时,请注意甄别。',
  //   day: 365              // 过期天数
  // },

  // ---------------------------
  // 文章版权信息
  // ---------------------------

  // copyright: {
  //   text: '本文采用 CC BY-NC-SA 4.0 许可协议',
  //   link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  //   icon: 'https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png',
  // },

  // ---------------------------
  // 作者头像
  // ---------------------------

  // 全局作者头像(用于文章列表等位置)
  // avatar: 'https://your-avatar.jpg',
})

export { blogTheme }
