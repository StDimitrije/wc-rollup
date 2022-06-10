import json from '@rollup/plugin-json';
import {
  terser
} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import {
  nodeResolve
} from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import {
  babel
} from '@rollup/plugin-babel';
import {
  version
} from './package.json';

export default {
  input: 'src/main.js',
  output: {
    name: 'version',
    file: 'dist/nomadix-ui-' + version + '.js',
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    postcss({
      modules: true,
      config: {
        path: './postcss.config.js',
      }
    }),
    nodeResolve({
      browser: true
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    json(),
    commonjs(),
  ]
};