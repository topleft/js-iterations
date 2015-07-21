/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/


//////////////////SUM ALL

//target options

var options = document.getElementsByTagName("option");

// sum option values using sum(options)
// use return value and append it to the dom
  // create span element and append to div approriate div of HTML
  //fill in span innerText with sum result

// var resultsContainer = document.getElementById("results");

///////////////////SUM ALL

document.getElementById("sum-all").addEventListener("click", function(event){
    document.getElementById("results").innerHTML =
      "<h4>Sum of All</h4>"+"$"+sumAll(options).toFixed(2);
});

///////////////////SUM SELECTED

document.getElementById("sum-selected").addEventListener("click", function(event){
    document.getElementById("results").innerHTML =
      "<h4>Sum of Selected</h4>"+"$"+sumSelected(options).toFixed(2);
});

////////////////////AVG ALL

document.getElementById("average-all").addEventListener("click", function(event){
    document.getElementById("results").innerHTML =
      "<h4>Average of All</h4>"+"$"+averageAll(options).toFixed(2);
});

////////////////////AVG SELECTED


document.getElementById("average-selected").addEventListener("click", function(event){
    document.getElementById("results").innerHTML =
      "<h4>Average of Selected</h4>"+"$"+averageSelected(options).toFixed(2);
});

///////////////////COUNT

document.getElementById("count-selected").addEventListener("click", function(event) {
    document.getElementById("results").innerHTML =
    "<h4>Count of Selected</h4>"+countSelected(options);
});






