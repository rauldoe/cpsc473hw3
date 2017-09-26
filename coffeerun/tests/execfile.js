var vm = require("vm");
var fs = require("fs");

exports.load = function(path, context) {
  context = context || {};
  var data = fs.readFileSync(path);
  vm.runInNewContext(data, context, path);
  return context;
};
