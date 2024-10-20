import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/**/*.tsx'],
  env: {
    NODE_ENV: 'production',
  },
  format: ['cjs', 'esm'],
  sourcemap: true,
  target: 'es2018',
  treeshake: true,
});
