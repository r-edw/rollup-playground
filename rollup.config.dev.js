import baseConfig from './rollup.config';
import copy from 'rollup-plugin-copy-glob';
import serve from 'rollup-plugin-serve'

export default Object.assign({}, baseConfig, {
  input: './DEV_ONLY/dev_main.js',
  output: [
    {
      ...baseConfig.output[1],
      sourcemap: true,
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    copy([
      { files: './DEV_ONLY/*.{html,js}', dest: 'dist' },
    ]),
    serve('dist'),
  ]
});