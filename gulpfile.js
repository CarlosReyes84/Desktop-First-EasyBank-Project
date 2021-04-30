const { src, dest, watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-dart-sass');

//FUNCTION TO COMPILE SASS
function css () {
    return src('src/scss/app.scss')
    .pipe(sass())
    .pipe(dest('./build/css'))
}

//FUNCTION TO WATCH FOR ANY CHANGES AND THEN APPLY CSS FUCTION
function watching() {
    watch('src/scss/**/*.scss', css)
}

exports.default = watching;
exports.css = css;