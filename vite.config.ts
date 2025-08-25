import { defineConfig } from 'vite'
import { join } from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

const define = process.env.NODE_ENV !== "production" ? {
  "global": {},
  "process": {
    "env": {
      GUTENBERG_PHASE: 2
    }
  },
} : undefined

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  esbuild: {
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
    jsxInject: `import { createElement, Fragment } from '@wordpress/element'`
  },
  define,
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), 'node_modules/$1'),
      },
    ],
  },
})
