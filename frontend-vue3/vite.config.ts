import {fileURLToPath, URL} from 'node:url'


import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {

    const env = loadEnv(mode, process.cwd(), '')

    return {
        server: {
            proxy: {
                '/api/v1': {
                    target: env.API_BASE,
                    changeOrigin: true,
                    secure: false
                }
            }
        },
        plugins: [
            vue(),
            vueJsx(),
            vueDevTools(),
            vuetify({autoImport: true})
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }

})
