"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const jshint = require("gulp-jshint");
const sassLint = require("gulp-sass-lint");

const sassPath = "./static/**/*.s+(a|c)ss";


gulp.task("default", ["js:lint", "sass"]);

gulp.task("sass", ["sass:lint", "sass:compile", "sass:watch"]);
gulp.task("lint", ["sass:lint", "js:lint"]);


gulp.task("sass:compile", () => (
  gulp.src(sassPath)
    .pipe(sass())
    .pipe(gulp.dest("./static/"))
));

gulp.task("sass:watch", () =>
  gulp.watch(sassPath, ["sass:lint", "sass:compile"]
));

gulp.task("sass:lint", () => (
  gulp.src(sassPath)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
));


gulp.task("js:lint", () => (
  gulp.src("./static/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
));
