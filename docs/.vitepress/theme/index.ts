import BlogTheme from "@sugarat/theme"
import type { EnhanceAppContext } from "vitepress"

// 自定义样式重载
import "./style.scss"

// 自定义主题色
// import './user-theme.css'

export default {
  ...BlogTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    const { app, router, siteData } = ctx
    // 在这里可以使用 Vue 的 app 实例进行自定义增强
    // 例如注册全局组件、指令等
    if (BlogTheme.enhanceApp) {
      BlogTheme.enhanceApp(ctx)
    }
  },
}
