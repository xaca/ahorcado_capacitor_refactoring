const {src,dest} = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify= require('gulp-uglify-es').default;

sass.compiler = require('dart-sass');

function js(){
	return src(['./js/constantes.js','./js/operaciones.js','./js/main.js'])
		   .pipe(concat("main.min.js"))
		   .pipe(uglify())
		   .pipe(dest('./bundle/js'));
}

function css() {
  return src("./sass/**/*.scss")
  		 .pipe(sass())
  		 .pipe(cleanCSS())
  		 .pipe(rename('main.min.css'))
  		 .pipe(dest("./bundle/css"));
}

exports.css = css;
exports.js = js;
exports.default = ()=>{};

/*
mkdir js css sass img
touch index.html ./sass/index.scs
npm init -y
touch gulpfile.js

CSS
npm install --global gulp-cli
npm install --save-dev gulp
npm install --save-dev gulp-sass
npm install --save-dev gulp-rename
npm install --save-dev gulp-clean-css
npm install --save-dev dart-sass

Javascript

npm install --save-dev gulp-concat
npm install --save-dev gulp-uglify-es

require('gulp-uglify-es').default
sass.compiler = require('dart-sass');//Este compilador permite use

Explicar en siguiente video como instalar los paquetes desde el package
*/