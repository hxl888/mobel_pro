var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	rename = require('gulp-rename'),
	cssmin = require('gulp-cssmin'),
	jsmin = require('gulp-jsmin'),
	htmlmin = require('gulp-htmlmin'),
	rjs = require('gulp-requirejs'),
	shell = require('gulp-shell'),
	imagemin = require('gulp-imagemin'),
	//imagemin = require('gulp-tinypng'),
	pngquant = require('imagemin-pngquant'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	replace = require('gulp-replace'),
	copy2 = require('gulp-copy2'),
	uglify = require('gulp-uglify'),
	spriter=require('gulp-css-spriter'),
	clean = require('gulp-clean')


// 合并公共样式
// gulp.task('concatCommoncss',function(){
// 	return gulp.src(['./asset/css/reset.css','./asset/css/common/**/*.css'])
// 		.pipe(autoprefixer())
// 		.pipe(concat('bundle.css'))
// 		.pipe(gulp.dest('./build/css/common/'))
// });
// gulp.task("spriter",['concatCommoncss','imagemins'],function(){
// 	var timestamp = +new Date();
// 	setTimeout(function(){
// 		return gulp.src('./build/css/common/bundle.css')
// 		.pipe(spriter({
// 			//生成的spriter的位置
// 			'spriteSheet':'./build/images/spriter.png',
// 			//生成样式文件图片引用地址的路径
// 			//如下将生产：backgound:url(../images/spriter.png?v=12312312)
// 			'pathToSpriteSheetFromCSS':'../../images/spriter.png?v='+timestamp+''
// 		}))
// 		.pipe(cssmin())
// 		.pipe(rename({suffix : '.min'}))
// 		.pipe(gulp.dest('./build/css/common/'))
// 	},4000)
// });

// gulp.task('cleanFile',['spriter','cssmin','jsmin','pageSpriter','copy'], function () {
//   return gulp.src(['./build/css/common/co*.css','./build/css/reset.css','./build/js/src/plugins','./build/fonts/'], {read: false})
//     	 .pipe(clean())
// });

// build----html
// gulp.task("replaceHtmlStylePaths",function(){
// 	return gulp.src('./asset/html/**/*.html')
// 		.pipe(replace(/<link rel="stylesheet" href="..\/css\/reset.css">/g, '<link rel="stylesheet" href="..\/css\/common\/bundle.min.css" type="text\/css">'))
// 		.pipe(replace(/<link rel="stylesheet" href="..\/css\/common\/co.*.css">/g, ''))

// 		.pipe(replace(/<script src="..\/js\/lib\/jquery.1.10.2.js"><\/script>/g, '<script src="..\/js\/src\/xeplugins.min.js"><\/script>'))
// 		.pipe(replace(/<script src="..\/js\/lib\/artemplate.js"><\/script>/g, ''))
// 		.pipe(replace(/<script src="..\/js\/src\/plugins\/plugins.*.js"><\/script>/g, ''))
// 		.pipe(gulp.dest('./build/html'))
// })
// gulp.task("copy",function(){
// 	var paths = [
// 		{src: "./asset/fonts/**/*",dest:"./build/css/fonts/"},
// 		{src: "./asset/js/lib/need/**/*",dest:"./build/js/lib/need/"},
// 		{src: "./asset/js/lib/skins/**/*",dest:"./build/js/lib/skins/"}
// 	]
// 	return copy2(paths)
// })
// gulp.task('htmlmins', function() {
//   return gulp.src('./src/html/**/*')
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('./dest/html'))
// });
//
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
// gulp.task('jsmin',['jsconcatplugins'],function(){
// 	return gulp.src('./asset/js/**/*.js')
// 	//.pipe(jsmin())
// 	.pipe(uglify())
// 	//.pipe(rename({suffix : '.min'}))
//     .pipe(gulp.dest('./build/js/'))
// });

// gulp.task('cssmin',function(){
// 	return gulp.src('./asset/css/**/*.css')
// 	.pipe(cssmin())
//     .pipe(gulp.dest('./build/css/'))
// });

// gulp.task("pageSpriter",['imagemins','cssmin'],function(){
// 	var timestamp = +new Date();
// 	setTimeout(function(){
// 		return gulp.src('./build/css/page*.css')
// 		.pipe(spriter({
// 			//生成的spriter的位置
// 			'spriteSheet':'./build/images/page-spriter.png',
// 			//生成样式文件图片引用地址的路径
// 			//如下将生产：backgound:url(../images/spriter.png?v=12312312)
// 			'pathToSpriteSheetFromCSS':'../images/page-spriter.png?v='+timestamp+''
// 		}))
// 		.pipe(cssmin())
// 		.pipe(gulp.dest('./build/css/'))
// 	},4000)
// });
gulp.task('jsconcatplugins',function(){
	return gulp.src(['./asset/js/lib/artemplate.js','./asset/js/lib/jquery.1.10.2.js','./asset/js/src/plugins/**/*.js'])
	.pipe(concat('xeplugins.min.js'))
	//.pipe(jsmin())
	.pipe(uglify())
    .pipe(gulp.dest('./build/js/src/'))
	//.pipe(rename({suffix : '.min'}))
});
//
// gulp.task('imagemins',function(){
// 	return gulp.src('./asset/images/**/*')
// 	.pipe(imagemin({
// 		progressive: true,
// 		svgoPlugins: [{removeViewBox: false}],
// 		use: [pngquant()]
// 	}))
// 	.pipe(gulp.dest('./build/images'));
// });
//
// gulp.task('server', shell.task('ps -ef |grep "node app.js"|grep -Ev "grep"|awk \'{print $2}\'|xargs kill -9 && node app.js'));

//监控任务
gulp.task('watch',function(){
	//监控所有.scss文档
	// gulp.watch('./src/sass/**/*.scss',['sass']);
	// gulp.watch('./src/js/**/*.js',['jsmin']);
	// gulp.watch('./src/images/**/*',['imagemins']);
	// gulp.watch('./src/html/**/*.html',['htmlmins']);
	// gulp.watch(['./js/lib/jquery.1.10.2.js','./js/src/plugins/**/*.js'],['jsconcatplugins']);
})


//默认任务
// gulp.task('default',['replaceHtmlStylePaths','copy','spriter','cssmin','imagemins','jsmin','pageSpriter','jsconcatplugins','cleanFile'])
