import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    external: [],
    noExternal: ['@actions/core'],
    clean: true,
    minify: true,
    outExtension: () => ({
        js: '.js'
    })
});
