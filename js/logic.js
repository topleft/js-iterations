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

