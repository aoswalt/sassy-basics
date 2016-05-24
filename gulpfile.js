"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const jshint = require("gulp-jshint");


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


gulp.task("lint:js", () => (
  gulp.src("./static/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
));
