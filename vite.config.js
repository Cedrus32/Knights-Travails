import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    root: 'src',
    // base: '/<REPO>/', // FIX: set to repo name
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/setup.js',
    },
    build: {
        outDir: '../dist',
    },
    plugins: [
        react({
            include: '**/*.{jsx,tsx}',
        })
    ],
})
