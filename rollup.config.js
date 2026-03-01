import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: [
    /^@babel.*/,
    /^@date-io\/.*/,
    /^@material-ui\/.*/,
    // only packages under our named scope with a slash should be treated as external
    // matching the bare scope caused incorrect imports like `from '@stssocialst-stp'`
    /^@stssocialst-stp\/.*/,
    'classnames',
    'clsx',
    'history',
    /^lodash.*/,
    'moment',
    'prop-types',
    /^react.*/,
    /^redux.*/,
  ],
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
  ],
};
