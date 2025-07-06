import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Beauty of Matrix",
    description: "Site for Beauty of Matrix",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "矩阵之美", link: "/books/basics.md" },
            { text: "矩阵应用", link: "/articles" },
        ],

        sidebar: {
            "/books/": [
                {
                    text: "矩阵之美",
                    items: [
                        {
                            text: "基础篇",
                            link: "/books/basics.md",
                        },
                        {
                            text: "算法篇",
                            link: "/books/algorithms.md",
                        },
                    ],
                },
            ],
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/shinyypig/BeautyofMatrix",
            },
        ],
    },
    markdown: {
        math: true,
        image: {
            // image lazy loading is disabled by default
            lazyLoading: true,
        },
    },
});
