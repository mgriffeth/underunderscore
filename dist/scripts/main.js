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

griff.size(arrayOne)

//is equal?
griff.isEqual = function(a, b){
  if(a === b){
    console.log("YEP! They're equal.");
  }else{
    console.log("NOPE! Thanks for playing though.")
  }
};

griff.isEqual(two, three)

griff.isEqual(two, dos)


//empty

griff.emptyItIs = function(thing){
  if(thing == null){
    return true && console.log("Nothing to see here.");
  }else{
    return false && console.log("WE'VE GOT SURVIVORS!!!");
  }
};
griff.emptyItIs(arrayTwo);
griff.emptyItIs(arrayOne) ; //why doesn't this work?



//contains

griff.isItInThere = function(object, thing){
  object.forEach(function(otherThing){
    if(thing === otherThing){
      console.log(otherThing)
    }else{
      console.log("These aren't the droids you are looking for.")
    }
  })
};
griff.isItInThere(arrayOne, "GHOST");
griff.isItInThere(arrayOne, "bunnywabbit");
