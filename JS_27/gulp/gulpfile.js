const { src, dest, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const gulp = require("gulp");
const cssmin = require("gulp-cssmin");

function concatstyles() {
  return src("app/**/*.css").pipe(concat("all.css")).pipe(dest("dist/concat"));
}

function mincss() {
  return src("dist/concat/all.css").pipe(cssmin()).pipe(dest("dist/concat"));
}

function defaultTask() {
  return series(concatstyles, mincss, move);
}

function move() {
  return src(["app/**/*.css", "app/*.html", "!app/**/*.scss"]).pipe(
    dest("dist/")
  );
}

exports.default = defaultTask;
exports.move = move;
exports.concatstyles = concatstyles;
exports.mincss = mincss;
