# Working with `for` loops

There's a common pattern with `for` loops where you:

* assign a variable (the accumulator)
* iterate over an array or object
* in each iteration, change the variable
* return the variable

This exercise will give you several chances to practice this pattern.

## Instructions

- Write the appropriate code in `js/dom.js` and `js/logic.js`
- Open `index.html` in your browser and click the buttons to see your results
- In git, add, commit and push after each button works (use a descriptive commit message)

By the end of the exercise you should have 1 event listener per button in `js/dom.js` and you should have 1 function per button in `js/logic.js`.

### `js/logic.js`

In `js/logic.js` write only pure functions: functions that take inputs, make calculations and return a result.  An example of a pure function is:

```js
var biggest = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
```

### `js/dom.js`

In `js/dom.js` write all of your code that will work with the DOM.  For example:

- `document.getElementsByName`
- `someElement.addEventListener`
- `someElement.innerHTML = 'some value'`

## Stories

**Prices**

- Users can see the sum of all prices
- Users can see the number of prices that are selected (the count)
- Users can see the sum of the selected prices
- Users can see the average of all of the prices

**Names**

As part of this exercise, you'll need to append multiple DOM elements.

Here's an example of how to add an `li` to a `ul`:

```js
var ul = document.querySelector('#my-ul');
var li = document.createElement('li');
li.innerHTML = "Hello";
ul.body.appendChild(li);
```

For this exercise, in `js/dom.js` you should find the textarea and get its `textContent`, then pass this string to functions in `js/logic.js`.

In `js/logic.js`, you should write functions that take in strings, and return arrays.

In `js/dom.js` you should iterate over these results with a `for` loop, and append DOM elements to the answers div.  This will be the first time you'll need to write a `for` loop in `js/dom.js`.

HINT: you can clear the `ul` by setting `innerHTML` to `null`.

- Users can see a list of names (just wire up the `split`, `appendChild` code...)
- Users can see a list of first names
- Users can see a list of last names
- Users can see a list of names with their lengths in the format ("Joe Smith - 9 ")

## Stretch Goal

Rewrite all functions in `js/logic.js` to not use any `for` loops.  Search MDN for:

- `forEach`
- `map`
- `reduce`
