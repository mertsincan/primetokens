import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    dts: false,
    external: ['@actions/core', 'fs', 'path'],
    sourcemap: true,
    splitting: false,
    clean: true,
    minify: true,
    outExtension: () => ({
        js: '.js'
    })
});
