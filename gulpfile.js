const projectFolder = 'server/public';
const sourceFolder = 'src';

const imageFormats = ['png', 'jpg', 'svg', 'gif', 'ico'];

const path = {
    build: {
      css: `${projectFolder}/css/`,
      js: `${projectFolder}/js/`,
      img: `${projectFolder}/img/`,
    },
  
    src: {
      scss: [`${sourceFolder}/scss/*.scss`, `!${sourceFolder}/scss/_*.scss`],
      js: [`${sourceFolder}/js/*.js`, `!${sourceFolder}/js/_*.js`],
      img: `${sourceFolder}/img/**/*.{${imageFormats.join()}}`,
      cssLib: `${sourceFolder}/cssLib/*.css`,
      jsLib: `${sourceFolder}/js/lib/*.js`,
    },
  
    watch: {
      scss: `${sourceFolder}/scss/**/*.scss`,
      js: `${sourceFolder}/js/*.js`,
      img: `${sourceFolder}/img/**/*.{${imageFormats.join()}}`,
      iconsprite: `${sourceFolder}/iconsprite/*.svg`,
      cssLib: `${sourceFolder}/cssLib/*.css`,
      jsLib: `${sourceFolder}/js/lib/*.js`,
    },
  
    clean: `./${projectFolder}/`,
};


const {src, dest} = require('gulp'),
  gulp = require('gulp'),

  fileInclude = require('gulp-file-include'),
  rename = require('gulp-rename'),
  del = require('del'),

  scssUtil = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  groupMedia = require('gulp-group-css-media-queries'),
  cleanCss = require('gulp-clean-css'),

  uglify = require('gulp-uglify-es').default,
  babel = require('gulp-babel'),

//   tingpng = require('gulp-tinypng'),
  svgsprite = require('gulp-svg-sprite');

const scss = () => {
    return src(path.src.scss) //Робимо вибірку scss файлів з директорії ресурсів
        .pipe(
            scssUtil({ //Перетворюємо scss код в css
                outputStyle: 'expanded',
            })
        )
        .pipe(groupMedia()) //Групуємо медіазапити
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'], //Префікси для останіх 5-ти версій браузерів
                cascade: true,
            })
        )
        .pipe(dest(path.build.css)) //Відправляємо css в папку dist
        .pipe(cleanCss()) //Стискаємо та очищуємо css
        .pipe(
            rename({
                extname: '.min.css', //Додаємо до мтиснутого файлу префікс min
            })
        )
        .pipe(dest(path.build.css)) //Відправляємо його в папку dist
};

const js = () => {
    return src(path.src.js)        //Берём .js файлы из директории ресурсов
        .pipe(fileInclude())         //Склеиваем .js файлы в один
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest(path.build.js)) //Отправляем его в папку dist
        .pipe(uglify()) //Сжимаем файл
        .pipe(
            rename({
                extname: '.min.js', //Добавляем сжатому файлу префикс min
            })
        )
        .pipe(dest(path.build.js))
};

const images = () => {
    return src(path.src.img)        //Берём картинки
        // .pipe(tingpng('6TsQGvW1MXstDQ8cJggrGqNhCqd94l81'))
        .pipe(dest(path.build.img)) //Отправляем картинки в папку dist
};

const cssLib = () => {
    return src(path.src.cssLib)
        .pipe(dest(path.build.css))
};

const jsLib = () => {
    return src(path.src.jsLib)
        .pipe(dest(path.build.js))
};


const makeSprite = () => {
    return src([`${sourceFolder}/iconsprite/*.svg`])
        .pipe(
            svgsprite({
                mode:{
                    stack: {
                        sprite: '../icons/icons.svg',
                        //example: true,
                    }
                }
            })
        )
        .pipe(dest(path.build.img)); //Отправляем спрайт в папку dist
};


const watchFiles = () => {
    gulp.watch([path.watch.scss], scss); //При изменении .scss файлов будет срабатывать функция css
    gulp.watch([path.watch.js], js); //При изменении .js файлов будет срабатывать функция js
    gulp.watch([path.watch.img], images); //При изменении картинок будет срабатывать функция images
    gulp.watch([path.watch.iconsprite], makeSprite); //При изменении иконок будет срабатывать функция makeSprite
    gulp.watch([path.watch.cssLib], cssLib); //При изменении cssБиблиотек будет срабатывать функция cssLib
    gulp.watch([path.watch.jsLib], jsLib); //При изменении jsБиблиотек будет срабатывать функция jsLib
};

const clean = () => {
    return del(path.clean); //Удаляем лишние файлы
};


const build = gulp.series(
    clean, 
    gulp.parallel(js, scss, images, makeSprite, cssLib, jsLib)
);


const watch = gulp.parallel(build, watchFiles);

exports.jsLib = jsLib;
exports.cssLib = cssLib;
exports.makeSprite = makeSprite;
exports.images = images;
exports.js = js;
exports.scss = scss;
exports.build = build;
exports.watch = watch;
exports.default = watch;