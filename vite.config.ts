import {defineConfig} from "vite"

export default defineConfig({
    build:{
        lib: {
            entry: "src",
            name: "remarkHTMLDirectives",
            fileName: "remark-html-directives"
            
        }
    }
})