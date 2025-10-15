import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/**/*.tsx'],
  env: {
    NODE_ENV: 'production',
  },
  esbuildOptions(options) {
    options.sourcemap = true;
  },
  format: ['cjs', 'esm'],
  minifyIdentifiers: true,
  minifyWhitespace: true,
  target: 'es2018',
  treeshake: true,
});
