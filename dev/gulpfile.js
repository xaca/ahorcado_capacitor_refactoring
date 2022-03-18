const {src,dest,series} = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
//const image = require('gulp-image');
const destino = "../www";

sass.compiler = require('dart-sass');

function js(){
	//src(['./js/constantes.js','./js/operaciones.js','./js/main.js'])
	return src("./js/**/*")
		   .pipe(concat("main.min.js"))
		   .pipe(uglify())
		   .pipe(dest(`./${destino}/js/`));
}

function css() {
  return src("./sass/**/*.scss")
  		 .pipe(sass())
  		 .pipe(cleanCSS())
  		 .pipe(rename('main.min.css'))
  		 .pipe(dest(`./${destino}/css`));
}

function images(){
	return src('./imgs/**/*')
	.pipe(image())
	.pipe(dest(`./${destino}/imgs`));
}

function mover_css(){
	return src('./css/**/*')
	.pipe(dest(`./${destino}/css`));
}

function mover_js(){
	return src('./js/**/*')
	.pipe(dest(`./${destino}/js`));
}

function mover_html(){
	return src('./index.html')
	.pipe(dest(`./${destino}`));
}

function mover_images(){
	return src('./imgs/**/*')
	.pipe(dest(`./${destino}/imgs`));
}

exports.css = css;
exports.js = js;
exports.images = images;
//exports.release = series(css,js,images,mover_css,mover_js,mover_html);
exports.build = series(css,js,mover_css,mover_js,mover_html,mover_images);

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
