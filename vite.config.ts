import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

const isProdcution = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  esbuild: {
    drop: isProdcution ? ['console', 'debugger'] : []
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()]
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      views: resolve(__dirname, 'src/views'),
      components: resolve(__dirname, 'src/components'),
      layouts: resolve(__dirname, 'src/layouts'),
      img: resolve(__dirname, 'src/assets/img')
    }
  }
});
