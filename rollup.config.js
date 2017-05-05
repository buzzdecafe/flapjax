// rollup.config.js
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';


export default {
  entry: 'src/flapjax.js',
  dest: 'dist/flapjax.min.js',
  format: 'iife',
  moduleName: 'flapjax',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      //include: 'node_modules/**',  // Default: undefined

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      //extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      // ignoreGlobal: false,  // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      // sourceMap: false,  // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      //namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      //ignore: [ 'conditional-runtime-dependency' ]
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};
