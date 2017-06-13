var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var srcDir = './src';

gulp.task('default', function () {
  browserSync.init({
    server: {
      baseDir: srcDir
    },
    port: '8800',
    open: false,
    serveStatic: [ srcDir ]
  });

  gulp.watch(
    [ '**/*' ],
    { cwd: srcDir }
  ).on('change', browserSync.reload);
});
