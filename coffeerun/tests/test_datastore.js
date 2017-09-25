
function test() {
  var ds = new App.DataStore();
  ds.add('m@bond.com', 'tea');
  ds.add('james@bond.com', 'eshpressho');
  d.getAll();
  ds.remove('james@bond.com');
  ds.getAll();
  ds.get('m@bond.com');
  ds.get('james@bond.com');
};
