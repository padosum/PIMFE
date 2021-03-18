const { config } = require("vuepress-theme-hope")

module.exports = config({
  base: '/PIMFE/',
  title: "Please In My Front-End",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: "/logo.svg",
    sidebar: "auto",
  }
})