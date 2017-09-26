var sourceDataStore = "../scripts/datastore.js";
var sourceTruck = "../scripts/truck.js";
var sourceTestDataStore = "./test_datastore.js";
var sourceTestTruck = "./test_truck.js";

var window = {};
var fs = require("fs");

// Read and eval library
var fileData = {};

fileData = fs.readFileSync(sourceDataStore, 'utf8');
eval(fileData);
fileData = fs.readFileSync(sourceTestDataStore, 'utf8');
eval(fileData);
fileData = fs.readFileSync(sourceTruck, 'utf8');
eval(fileData);
fileData = fs.readFileSync(sourceTestTruck, 'utf8');
eval(fileData);

var truckId = "test_id-nodejs";
var ds = test_obj_datastore(window);
test_obj_truck(window, truckId, ds);
