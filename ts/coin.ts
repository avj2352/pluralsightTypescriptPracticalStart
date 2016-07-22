/// <reference path="./vendingMachine.ts"/>
class Quarter extends VendingMachine{
  private value:number = 0.25;
  public getImage():string{
    this.value = 0.5;
    return "img/Quarter.png";
  }//end:getImage()

  // Standard Getters and Setters for Quarter
  public getValue():number{
    return this.value;
  };//end:getValue()

  public setValue(input:number):void{
    this.value = input;
  };//end:setValue()

  //Typescript Getters and Setters. Value now can be set as a property.
  get Value():number{
    return this.value;
  };//Typescript getter

  set Value(input:number){
    this.value = input;
  };//Typescrip setter
}//endclass:Quarter

var coin = new Quarter();
coin.Value = 0.75; // set
var anotherValue = coin.Value; // get
