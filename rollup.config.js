import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFolder = NODE_ENV === 'production' ? 'dist/prod/' : 'dist/dev/';

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),
  babel({
    exclude: 'node_modules/**'
  }),
  resolve(),
  commonjs()
];

export default [
  // Media
  {
    input: 'src/media/MediaRender.js',
    external: id => /^react|styled-jsx|styled-components/.test(id),
    output: {
      file: outputFolder + 'MediaRender.js'
    },
    plugins
  },

  {
    input: 'src/media/RenderToggle.js',
    external: id => /^react|styled-jsx|styled-components/.test(id),
    output: {
      file: outputFolder + 'RenderToggle.js'
    },
    plugins
  },

  // Rendered components
  {
    input: 'src/components/ProgressCircle.js',
    external: id => /^react|styled-jsx|styled-components/.test(id),
    output: {
      file: outputFolder + 'ProgressCircle.js'
    },
    plugins
  },

  // Input Components
  {
    input: 'src/components/input/Toggle.js',
    external: id => /^react|styled-jsx|styled-components/.test(id),
    output: {
      file: outputFolder + 'Toggle.js'
    },
    plugins
  }
];
