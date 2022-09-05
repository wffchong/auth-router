import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // 配置路径别名
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    // 配置跨域
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})
