console.log('The Iron Yard Rocks Mah Sahks');
var arrayOne = ["GHOST","VAMPIRE", "WITCH", "SKELETON","ZOMBIE", "WEREWOLF","GHOUL","GOBLIN", "MUMMY"];
var arrayTwo;
var griff = {};
var two = 2;
var three = 3;
var dos = 2;


// size
griff.size = function(thing){
  console.log(thing.length);
};



//is equal?
griff.isEqual = function(a, b){
  if(a === b){
    console.log("YEP! They're equal.");
  }else{
    console.log("NOPE! Thanks for playing though.")
  }
};



//empty

griff.emptyItIs = function(thing){
  if(thing == null){
    return true && console.log("Nothing to see here.");
  }else{
    return false && console.log("WE'VE GOT SURVIVORS!!!");
  }
};



//contains

griff.isItInThere = function(object, thing){
  object.forEach(function(otherThing){
    if(thing === otherThing){
      console.log("found:" + otherThing)
    }else{
      console.log("These aren't the droids you are looking for.")
    }
  })
};


//greeting

griff. greeting = function(){
  alert("WELL HELLO THERE");
};
