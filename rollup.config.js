import json from '@rollup/plugin-json';
import  { terser }  from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import  { nodeResolve }  from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import  { babel }  from '@rollup/plugin-babel';
import path from 'path';
// import { version } from './package.json';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      name: 'version',
      file: 'dist/bundle.umd.js',
      format: 'umd'
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [
    nodeResolve({ browser: true }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    json(),
    commonjs(),
    postcss({ 
      extract: path.resolve('dist/main.css') 
    }),
  ]
};