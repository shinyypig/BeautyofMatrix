import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Beauty of Matrix",
    description: "Site for Beauty of Matrix",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "主页", link: "/" },
            { text: "文章", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "文章",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/shinyypig/BeautyofMatrix",
            },
        ],
    },
    markdown: {
        math: true,
    },
});
