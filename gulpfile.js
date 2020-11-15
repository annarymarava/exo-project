let project_folder = 'dist';
let source_folder = 'src';

let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        media: project_folder + '/media/',
        fonts: project_folder + '/fonts/',
    },

    src: {
        html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
        css: source_folder + '/sass/main.scss',
        js: source_folder + '/js/main.js',
        media: source_folder + '/media/**/*.{jpg,svg,png,gif,ico,webp}',
        fonts: source_folder + '/fonts/*.{ttf,woff,woff2}',
    },

    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/sass/**/*.scss',
        js: source_folder + '/js/**/*.js',
        media: source_folder + '/media/**/*.{jpg,svg,png,gif,ico,webp}',
    },

    clean: './' + project_folder + '/'
}


let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default;


function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: false
        
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
    .pipe (
        sass({
            outputStyle: 'expanded'
        })
    )
    .pipe(
        autoprefixer({
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        })
    )
    .pipe(
        group_media()
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
        rename({
            extname: '.min.css'
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: '.min.js'
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.media)
        .pipe(dest(path.build.media))
        .pipe(browsersync.stream())
}

function fonts() {
        src(path.src.fonts)
        .pipe(dest(path.build.fonts))
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.media], images);
}

function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;