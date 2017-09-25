function test() {
  myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
  myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decafe'});
  myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
  myTruck.printOrders();
  myTruck.deliverOrder('dr@no.com');
  myTruck.deliverOrder('m@bond.com');
  myTruck.printOrders();
}
