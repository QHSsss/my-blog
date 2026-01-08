/**
 * @sugarat/theme 博客主题配置文件
 *
 * 所有配置项详见文档: https://theme.sugarat.top/
 */

import { getThemeConfig } from "@sugarat/theme/node"
import type { Theme } from "@sugarat/theme"

const baseUrl = "https://xgood.xz.cn" // 修改为你的站点域名

// RSS订阅配置
const RSS: Theme.RSSOptions = {
  title: "@sugarat/theme",
  baseUrl,
  description: "没事人的小屋，不开心就不开心，也别勉强的慰问",
  language: "zh-cn",
  image: "https://xgood.xz.cn/logo.png",
  favicon: "https://xgood.xz.cn/favicon.ico",
  copyright: "Copyright (c) 没事人",
  url: `${baseUrl}/feed.rss`,
}

const blogTheme = getThemeConfig({
  // 文章默认作者(可在文章frontmatter中覆盖)
  author: "没事人",

  // 首页精选文章(置顶文章)
  hotArticle: {
    title: "🔥 精选文章",
    nextText: "换一组",
    pageSize: 9,
    empty: "暂无精选文章",
  },

  homeTags: {
    title: "🏷️ 标签",
  },

  // 评论系统配置(可选: 'giscus' | 'artalk')
  comment: {
    // 使用 Giscus (基于 GitHub Discussions)
    type: "giscus",
    options: {
      repo: "QHSsss/my-blog", // GitHub 仓库(格式: owner/repo)
      repoId: "R_kgDOQ1NuMA", // 仓库 ID (在 giscus.app 获取)
      category: "General", // 讨论分类
      categoryId: "DIC_kwDOQ1NuMM4C0rxj", // 分类 ID (在 giscus.app 获取)
      inputPosition: "top", // 评论输入框位置: 'top' | 'bottom'
    },
    // 移动端是否最小化评论框(仅 Artalk)
    // mobileMinify: false,
  },

  // 首页文章列表配置
  article: {
    readingTime: true, // 是否展示预计阅读时间
    hiddenCover: false, // 是否隐藏封面图片
    // coverAlt: '文章封面', // 全局封面图的 alt 文本
    readingTimePosition: "inline",
  },

  // Mermaid 图表支持
  mermaid: true,

  // 首页推荐文章配置(根据文章 frontmatter 的 recommend 字段)
  recommend: {
    title: "🔍 推荐文章", // 推荐区域标题
    nextText: "换一组", // 换一组按钮文字
    pageSize: 9, // 每次显示数量
    sort: "filename", // 文件名排序
    empty: "暂无推荐文章", // 无推荐文章时的提示
    showSelf: true, // 是否展示当前正在浏览的文章
    style: "sidebar",
    showDate: true,
    showNum: true,
  },

  friend: [
    {
      nickname: "LINUX DO",
      des: "真诚、友善、团结、专业，\n共建你我引以为荣之社区。",
      avatar: "/images/linuxdo.webp",
      url: "https://linux.do/",
    },
    // 添加更多友链...
  ],

  authorList: [
    {
      nickname: "没事人",
      url: "https://xgood.xz.cn/aboutme.html",
      des: "You Are Good. Just Be Yourself.",
    },
  ],

  footer: {
    // 页脚信息(支持 HTML 内容,可配置为数组显示多条)
    message: "欢迎来到没事人的小屋",

    // 版权信息
    copyright: "MIT License | © 没事人",

    // ICP 备案信息(中国大陆网站需要)
    icpRecord: {
      name: "湘ICP备2025147829号-1",
      link: "https://beian.miit.gov.cn/",
    },

    version: false,
  },
  themeColor: "el-blue",

  popover: {
    title: "天涯若比邻",
    duration: 5000,
    mobileMinify: false,
    body: [
      // {
      //   type: "title",
      //   content: "天涯若比邻",
      //   style: "color:red",
      // },
      { type: "text", content: "👇公众号👇---👇 微信 👇" },
      {
        type: "image",
        src: "/images/qr.webp",
      },
    ],
    footer: [
      // {
      //   type: "text",
      //   content: "footer 与 body 结构一致",
      // },
      {
        type: "button",
        link: "https://xgood.xz.cn/aboutme.html",
        content: "关于作者",
        // props: {
        //   type: "default",
        // },
      },
      {
        type: "button",
        link: "https://blog.csdn.net/weixin_43436640",
        content: "CSDN",
        // props: {
        //   type: "default",
        // },
      },
    ],
  },
  RSS,
})

export { blogTheme }
