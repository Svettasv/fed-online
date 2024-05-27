const { src, dest, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");

function concatstyles() {
  return src("app/**/*.css")
    .pipe(concat("all.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/concat"));
}

function defaultTask() {
  return series(concatstyles, move);
}

function move() {
  return src(["app/**/*.css", "app/*.html", "!app/**/*.scss"]).pipe(
    dest("dist/")
  );
}

exports.default = defaultTask;
exports.move = move;
exports.concatstyles = concatstyles;
