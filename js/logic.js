/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/

function sumAll(options){
  var sum = 0;
  for (var i = 0; i < options.length; i++) {
      sum += parseInt(options[i].value);
  }
  return sum;
}

function countSelected(options){
    var total = 0;
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected){
        total ++;
    }
  }
  return total;

}

function sumSelected(options){
  var sum = 0;
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected) {
        sum += parseInt(options[i].value);
    }
  }
  return sum;
}

function averageAll(options) {
  var sum = 0;
    for (var i = 0; i < options.length; i++) {
      sum += parseInt(options[i].value);
}
  return sum/options.length;
}

function averageSelected(options){
  var sum = 0;
  var totalSelected = 0;
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected){
      sum += parseInt(options[i].value);
      totalSelected++;
    }
  }
  return sum/totalSelected;
}


// logic for names


function parseStringOfNames(string){
  var newText = text.split("\n");
  return newText;
}


function trimNames(array){
  trimmedNames = [];
  for (var i = 0; i < array.length; i++) {
    trimmedNames.push(array[i].trim());
  };
  return trimmedNames;
}

function parseNamesIntoArrays(array){
  parsedNames = [];
  for (var i = 0; i < array.length; i++) {
    parsedNames.push(array[i].split(" "));
  }
  return parsedNames;
}

function sortFirstAndLast(array){
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i].length === 3){
      var last2 = array[i].pop();
      var last1 = array[i].pop();
      var last =last1+" "+last2;
      array[i][1] = last;
      newArray.push(array[i]);
    }
    else if (array[i].length === 1){
      continue;
    }
    else{
      newArray.push(array[i]);
    }
  }
  return newArray;
}


function printAllNames(array) {
  var string = "";
  for (var i = 0; i < array.length; i++) {
     var name = array[i].join(" ");
     string += '<li>'+name+'</li>';
  }
  return string;
}

function firstNames(array){
  var string = "";
  for (var i = 0; i < array.length; i++) {
     var firstName = array[i][0];
     string += '<li>'+firstName+'</li>';
  }
  return string;
}

function lastNames(array){
  var string = "";
  for (var i = 0; i < array.length; i++) {
     var lastName = array[i][1];
     string += '<li>'+lastName+'</li>';
  }
  return string;
}

function namesWithLengths(array) {
  var string = "";
  for (var i = 0; i < array.length; i++) {
     var name = array[i].join(" ");
     string += '<li>'+name+": "+name.length+'</li>';
  }
  return string;

}
