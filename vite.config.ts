/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'TagInput',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/es/${name}/style`,
        }
      ]
    }),
    dts({
      copyDtsFiles: false,
      // FYI: https://github.com/qmhc/vite-plugin-dts/issues/54#issuecomment-1010949667
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(/src/, ''),
        content
      })
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
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
  }
})
