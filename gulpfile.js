var gulp=require('gulp');
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
var cssClean=require("gulp-clean-css");
gulp.task("cleanJs",function(){
	gulp.src("js/*.js")//"./"当前目录，*所有文件
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('bulid/js'));
});
gulp.task("cssClean",function(){
	gulp.src("css/*.css")
		.pipe(cssClean())
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("bulid/css"));
});