import {fileURLToPath, URL} from 'url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
    plugins: [
        vue({reactivityTransform: true}),
        vueJsx(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/, /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: ['vue', 'vue/macros', '@vueuse/core'],
            dts: './auto-imports.d.ts',
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: false,
                    enabledCollections: ['ep', 'mdi'],
                }),
            ],
        }),
        Components({
            resolvers: [
                IconsResolver({
                    prefix: false,
                    enabledCollections: ['ep', 'mdi'],
                }),
                ElementPlusResolver(),
            ],
            dts: './components.d.ts',
        }),
        ElementPlus({
            useSource: true
        }),
        Icons({
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
