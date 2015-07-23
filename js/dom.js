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


// DOM manipulation for names
else if (target === "names.html") {

var text = document.getElementsByTagName("textarea")[0].innerHTML;
var names = sortFirstAndLast(parseNamesIntoArrays(trimNames(parseStringOfNames(text))));





// print all names
document.getElementById("all-names").addEventListener("click",
  function(){
    document.getElementById("results").innerHTML =
      "<h4>All Names</h4>"+printAllNames(names);
});

document.getElementById("first-names").addEventListener("click",
  function(){
    document.getElementById("results").innerHTML =
      "<h4>First Names</h4>"+firstNames(names);
});

document.getElementById("last-names").addEventListener("click",
  function(){
    document.getElementById("results").innerHTML =
      "<h4>Last Names</h4>"+lastNames(names);
});

document.getElementById("names-with-lengths").addEventListener("click",
  function(){
    document.getElementById("results").innerHTML =
      "<h4>Names & Lengths</h4>"+namesWithLengths(names);
});





  // console.log(text);
  // var test = sortFirstAndLast(parseNamesIntoArrays(trimNames(parseStringOfNames(text))));

  // var test2 = (parseNamesIntoArrays(test));
  // console.log(sortFirstAndLast(test2));

}










