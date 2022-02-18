import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'TagInput',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd']
    }
  },
  plugins: [
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/es/${name}/style`,
        }
      ]
    }),
    dts({
      copyDtsFiles: false
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }
    ]
  }
})
