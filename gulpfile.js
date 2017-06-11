var gulp       = require('gulp'),
	connect    = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	sass       = require('gulp-sass'),
	babel      = require('gulp-babel'),
	es2015     = require('babel-preset-es2015'),
	webpack    = require('gulp-webpack');

var port = process.env.port || 3000;

gulp.task('browserify', function(){
	gulp.src('./app/js/main.js')
	.pipe(browserify({
		transform: 'reactify'
	}))
	.pipe(gulp.dest('./dist/js'))
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(gulp.dest('./dist/js/components'));
});

gulp.task('sass', function(){
	return gulp.src('./app/style/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('connect', function(){
	connect.server({
		root: './',
		port: port,
		livereload: true
	})
	console.log('服务器开启成功！')
});

gulp.task('js', function(){
	gulp.src('./dist/**/**/*.js')
	.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src('./dist/**/*.css')
	.pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src('./dist/**/*.html')
	.pipe(connect.reload());
});

gulp.task('scss', function(){
	gulp.src('./app/**/*.scss')
	.pipe(connect.reload());
});


gulp.task('watch', function(){
	gulp.watch('./dist/**/**/*.js',['js']);
	gulp.watch('./app/**/.js',['browserify']);
	gulp.watch('./app/**/.js',['js']);
	gulp.watch('./dist/**/*.css',['css']);
	gulp.watch('./app/**/*.html',['html']);
	gulp.watch('./app/js/**/*.js',['browserify']);
	gulp.watch('./app/**/*.scss', ['sass']);	
})

gulp.task('default', ['browserify','connect','watch','sass']);