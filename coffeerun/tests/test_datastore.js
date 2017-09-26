
function test_obj_datastore(window) {
  window = window || {};
  var App = window.App;

  var data = {};
  var ds = new App.DataStore();
  ds.add('m@bond.com', 'tea');
  ds.add('james@bond.com', 'eshpressho');
  data = ds.getAll();
  console.log(data);
  ds.remove('james@bond.com');
  data = ds.getAll();
  console.log(data);
  data = ds.get('m@bond.com');
  console.log(data);
  data = ds.get('james@bond.com');
  console.log(data);

  return ds;
}
