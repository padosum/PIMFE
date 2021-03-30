module.exports = {
    "/collection/": [
        "javascript-data-structures",
        "array",
        "object",
        "set-and-map",
    ],
    "/": [
    "",
    {
        title: "Guide",
        icon: "creative",
        prefix: "guide/",
        collapsable: false,
        children: [
        "get-started/",
        "interface/",
        "layout/",
        "markdown/",
        "feature/",
        "blog/",
        "eject",
        ],
    },
    {
        title: "Config",
        icon: "config",
        prefix: "config/",
        collapsable: false,
        children: ["", "theme/", "page", "stylus", "plugin/"],
    },
    {
        title: "Basic",
        icon: "module",
        prefix: "basic/",
        collapsable: false,
        children: ["tutorial", "markdown/", "vuepress/"],
    },
    "FAQ/",
    "demo/",
    ],
};
  