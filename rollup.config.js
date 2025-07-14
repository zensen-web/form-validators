import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  // UMD build
  {
    input: 'src/index.js',
    output: {
      file: 'build/index.umd.js',
      format: 'umd',
      name: 'FormValidators',
      globals: {
        validator: 'validator'
      }
    },
    external: ['validator'],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      })
    ]
  },
  // ESM build
  {
    input: 'src/index.js',
    output: {
      file: 'build/index.esm.js',
      format: 'esm'
    },
    external: ['validator'],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      })
    ]
  }
];