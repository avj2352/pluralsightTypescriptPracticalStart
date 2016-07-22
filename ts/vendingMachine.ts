//name: class VendingMachine. Intro to Arrow functions or Lambdas in Typescript
/// <reference path="./coin.ts"/>
class VendingMachine{
  private paid = ko.observable(0); //Now paid is a function
  //Let's accept a collection of accepted compilerOptions
  //acceptedCoins: Quarter[] = new Array(new Quarter()); // acceptedCoins:Quarter[] = [new Quarter()];
  // The same above method can be written using lambdas
  acceptCoin = (coin:Quarter):void => {
    let oldTotal = this.paid();
    this.paid(oldTotal + coin.Value);
  };//end:acceptAnotherCoin()

}//endclass:VendingMachine
