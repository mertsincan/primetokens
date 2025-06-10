import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs'],
    outDir: 'dist',
    external: [],
    noExternal: ['@actions/core'],
    clean: true,
    minify: true,
    outExtension: () => ({
        js: '.js'
    })
});
