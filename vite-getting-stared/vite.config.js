import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: '@fect-ui/vue',
          esModule: true,
          resolveStyle: (name) => `@fect-ui/vue/es/${name}/style/index`,
        },
      ],
    }),
  ],

  server: {
    port: 4000,
  },
})
