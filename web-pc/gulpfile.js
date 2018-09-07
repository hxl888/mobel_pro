var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	rename = require('gulp-rename'),
	cssmin = require('gulp-cssmin'),
	jsmin = require('gulp-jsmin'),
	htmlmin = require('gulp-htmlmin'),
	rjs = require('gulp-requirejs'),
	shell = require('gulp-shell'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	replace = require('gulp-replace'),
	copy2 = require('gulp-copy2'),
	uglify = require('gulp-uglify'),
	spriter=require('gulp-css-spriter')

gulp.task('concatcss',function(){
	var timestamp = +new Date();
	return gulp.src('./css/**/*.css')
		.pipe(autoprefixer())
		.pipe(concat('bundle.css'))
		.pipe(spriter({
			//生成的spriter的位置
			'spriteSheet':'./images/spriter.png',
			//生成样式文件图片引用地址的路径
			//如下将生产：backgound:url(../images/spriter.png?v=12312312)
			'pathToSpriteSheetFromCSS':'../images/spriter.png?v='+timestamp+''
		}))
		.pipe(gulp.dest('./dest/css'))
		.pipe(cssmin())
		.pipe(rename({suffix : '.min'}))
		.pipe(gulp.dest('./dest/css'))
})
gulp.task("replaceHtmlStylePaths",function(){
	return gulp.src('./html/**/*.html')
		.pipe(replace(/<link rel="stylesheet" href="..\/css\/common.css" type="text\/css">/g, '<link rel="stylesheet" href="..\/css\/bundle.min.css" type="text\/css">'))
		.pipe(replace(/<link rel="stylesheet" href="..\/css\/allCss.css" type="text\/css">/g, ''))
		.pipe(replace(/<link rel="stylesheet" href="..\/css\/hxl.css" type="text\/css">/g, ''))
		.pipe(gulp.dest('./dest/html'))
})
gulp.task("copy",function(){
	var paths = [
		{src: "./fonts/**/*",dest:"./dest/fonts/"},
		{src: "./js/lib/need/**/*",dest:"./dest/js/lib/need/"},
		{src: "./js/lib/skins/**/*",dest:"./dest/js/lib/skins/"}
	]
	return copy2(paths)
})
gulp.task('htmlmins', function() {
  return gulp.src('./html/**/*')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dest/html'))
});

// gulp.task('sass',function(){
// 	return sass('./src/sass/')
// 	//.pipe(gulp.dest('./css'))
// 	.pipe(cssmin())
// 	.pipe(autoprefixer({
//         browsers: ["> 5%"],
//         cascade: false
//     }))
// 	//.pipe(rename({suffix : '.min'}))
// 	.pipe(gulp.dest('./dest/css'))
//     .pipe(gulp.dest('./src/css'))
// });
//
gulp.task('jsmin',function(){
	return gulp.src('./js/**/*.js')
	.pipe(jsmin())
	.pipe(uglify())
	.pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dest/js'))
});
gulp.task('jsconcatplugins',function(){
	return gulp.src(['./js/lib/jquery.1.10.2.js','./js/src/plugins/**/*.js'])
	.pipe(concat('allPlugins.min.js'))
	//.pipe(jsmin())
	.pipe(uglify())
    .pipe(gulp.dest('./js/src/'))
	.pipe(rename({suffix : '.min'}))
});
//
gulp.task('imagemins',['concatcss'],function(){
	return gulp.src('./images/**/*')
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('./dest/images'));
});
//
// gulp.task('server', shell.task('ps -ef |grep "node app.js"|grep -Ev "grep"|awk \'{print $2}\'|xargs kill -9 && node app.js'));

//监控任务
gulp.task('watch',function(){
	//监控所有.scss文档
	// gulp.watch('./src/sass/**/*.scss',['sass']);
	gulp.watch('./js/**/*.js',['jsmin']);
	gulp.watch('./images/**/*',['imagemins']);
	gulp.watch('./html/**/*.html',['htmlmins']);
	gulp.watch(['./js/lib/jquery.1.10.2.js','./js/src/plugins/**/*.js'],['jsconcatplugins']);
})


//默认任务
gulp.task('default',['concatcss','replaceHtmlStylePaths','copy','imagemins','jsconcatplugins','jsmin'])
