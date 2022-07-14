import gulp from "gulp";
import ts  from "gulp-typescript";
var tsProject = ts.createProject("tsconfig.json");


gulp.task("default", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

// gulp.task('watch', ['scripts'], function() {
//     gulp.watch('src/*.ts', ['scripts']);
// });