/* jshint esversion:6, globalstrict:true */
/* globals require */
"use strict";

const gulp = require("gulp");
// const exec = require("child_process").exec;
const sass = require("gulp-sass");


gulp.task("sass",["sass:compile", "sass:watch"]);

//NOTE(adam): es6 return by default
gulp.task("sass:compile", () => (
  // exec("ls", (err, output) => {
  //   console.log("output", output);
  // });
  // exec("sass static/style.scss static/style.css");

  gulp.src("./static/**/*.scss")
    // .pipe(sass().on("error", sass.logError))
    .pipe(sass())
    .pipe(gulp.dest("./static/"))
));

gulp.task("sass:watch", () =>
  gulp.watch("./static/**/*.scss", ["sass"]
));
