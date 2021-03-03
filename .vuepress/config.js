const { config } = require("vuepress-theme-hope")

module.exports = config({
  title: "Please In My Front-end",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: "/logo.svg",
    sidebar: "auto",
  }
})