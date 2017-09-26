var sourceDataStore = "../scripts/datastore.js";
var sourceTruck = "../scripts/truck.js";
var sourceTestDataStore = "./test_datastore.js";
var sourceTestTruck = "./test_truck.js";
var sourceMainTest = "./main_test.js";

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
fileData = fs.readFileSync(sourceMainTest, 'utf8');
eval(fileData);
