(function(){
  function Parse(object:string){
    for(var index=0; index<object.length;index++){
      var character:string = object[index];
      console.log(character);
    }
  Parse("This is a String");
  }//end:Parse()

  class myClass{
    name:string = "Pramod";
    age:number = 29;
    //This is a comments
  }//endclass:myClass
}());//IIFE
