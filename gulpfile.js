const { series, watch, src, dest, parallel } = require( 'gulp' )
const pump = require( 'pump' )

// gulp plugins and utils
var livereload = require( 'gulp-livereload' )
var postcss = require( 'gulp-postcss' )
var zip = require( 'gulp-zip' )
// var uglify = require( 'gulp-uglify' )
var uglify = require( 'gulp-terser' )
// const terser = require('gulp-terser')
var concat = require( 'gulp-concat' )
var beeper = require( 'beeper' )

// postcss plugins
var autoprefixer = require( 'autoprefixer' )
var colorFunction = require( 'postcss-color-mod-function' )
var cssnano = require( 'cssnano' )
var easyimport = require( 'postcss-easy-import' )

// tailwind
const tailwind = require( 'tailwindcss' )

function serve( done ) {
  livereload.listen()
  done()
}

const handleError = ( done ) => {
  return function ( err ) {
    if ( err ) {
      beeper()
    }
    return done( err )
  }
}

function hbs( done ) {
  pump( [
    src( [ '*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs' ] ),
    livereload()
  ], handleError( done ) )
}

function css( done ) {
  var processors = [
    easyimport,
    tailwind(),
    colorFunction(),
    // autoprefixer(),
    // cssnano()
  ]

  pump( [
    src( 'assets/css/*.css', { sourcemaps: false } ),
    postcss( processors ),
    dest( 'assets/built/', { sourcemaps: '.' } ),
    livereload()
  ], handleError( done ) )
}

function js( done ) {
  pump( [
    src( 'assets/js/*.js', { sourcemaps: false } ),
    concat('theme.js'),
    uglify(),
    dest( 'assets/built/', { sourcemaps: '.' } ),
    livereload()
  ], handleError( done ) )
}

function zipper( done ) {
  var targetDir = 'dist/'
  var themeName = require( './package.json' ).name
  var filename = themeName + '.zip'

  pump( [
    src( [
      '**',
      '!node_modules', '!node_modules/**',
      '!dist', '!dist/**'
    ] ),
    zip( filename ),
    dest( targetDir )
  ], handleError( done ) )
}

const cssWatcher = () => watch( 'assets/css/**', css )
const hbsWatcher = () => watch( [ '*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs' ], hbs )
const watcher = parallel( cssWatcher, hbsWatcher )
const build = series( css, js )
const dev = series( build, serve, watcher )

exports.build = build
exports.zip = series( build, zipper )
exports.default = dev
