const { series } = require("gulp");

function clean(cb) {
  console.log("Clean TASK");
  cb();
}

function build(cb) {
  console.log("Build TASK");
  cb();
}

function test(cb) {
  console.log("hello test");
  cb();
}

exports.test = test;
exports.build = build;
exports.default = series(clean, build, test);
