/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

var parsePath = document.location.pathname.split("/");
var target = parsePath[parsePath.length-1];


if(target === "index.html"){
//retrieve options
var options = document.getElementsByTagName("option");


///////////////////SUM ALL

document.getElementById("sum-all").addEventListener("click",
  function(){
    document.getElementById("results").innerHTML =
      "<h4>Sum of All</h4>"+"$"+sumAll(options).toFixed(2);
});

///////////////////SUM SELECTED

document.getElementById("sum-selected").addEventListener("click", function(){
    document.getElementById("results").innerHTML =
      "<h4>Sum of Selected</h4>"+"$"+sumSelected(options).toFixed(2);
});

////////////////////AVG ALL

document.getElementById("average-all").addEventListener("click",
  function(){
    document.getElementById("results").innerHTML =
      "<h4>Average of All</h4>"+"$"+averageAll(options).toFixed(2);
});

////////////////////AVG SELECTED


document.getElementById("average-selected").addEventListener("click", function(){
    document.getElementById("results").innerHTML =
      "<h4>Average of Selected</h4>"+"$"+averageSelected(options).toFixed(2);
});

///////////////////COUNT

document.getElementById("count-selected").addEventListener("click", function(){
    document.getElementById("results").innerHTML =
    "<h4>Count of Selected</h4>"+countSelected(options);
});
}

else if (target === "names.html") {

var text = document.getElementsByTagName("textarea")[0].innerHTML;


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
    else{
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(text);
var test = (trimNames(parseStringOfNames(text)));
var test2 = (parseNamesIntoArrays(test));
console.log(test2)
console.log(sortFirstAndLast(test2));

// console.log(parseNamesIntoArrays(trimNames(text)));
}










