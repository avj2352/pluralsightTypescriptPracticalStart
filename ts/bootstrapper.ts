//Name:boostrapper.js
//Description: This is the entry point script of our application
//This will instantiate all classes
//Setup the data-binding

/// <reference path="vendingMachine.ts"/>
var machine = new VendingMachine();
ko.applyBindings(machine); //Typescript doesn't understand what ko object is...
