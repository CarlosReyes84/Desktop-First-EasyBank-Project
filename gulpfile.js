const { src, dest, watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const browser = require('browser-sync')

//FUNCTION TO COMPILE SASS
function css () {
    return src('src/scss/app.scss')
    .pipe(sass())
    .pipe(dest('./build/css'))
}

//FUNCTION TO WATCH FOR ANY CHANGES AND THEN APPLY CSS FUCTION
function watching() {
    browser.init({
        server: {
            baseDir: './'
        }
    })

    watch('src/scss/**/*.scss', css)
    watch('./*.html').on('change', browser.reload);
    watch('build/css/**/*.css').on('change', browser.reload);
}

exports.default = watching;
exports.css = css;