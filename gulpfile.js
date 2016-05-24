/* jshint esversion:6, globalstrict:true */
/* globals require */
"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");


gulp.task("default", ["sass"]);


gulp.task("sass",["sass:compile", "sass:watch"]);
gulp.task("sass:compile", () => (
  gulp.src("./static/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./static/"))
));
gulp.task("sass:watch", () =>
  gulp.watch("./static/**/*.scss", ["sass"]
));
