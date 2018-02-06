/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
function AgePrompt() {
  var name = prompt('What is your name?');
  var input = prompt('How old are you, ' + name + '?');
  var age = parseInt(input, 10);
  while (isNaN(age) || age < 0 || age > 100) {
    age = prompt('Sorry, this is not a valid age. How old are you?');
  }
  if (age >= 18) {
    alert('Hurray!!! You can now proceed to wathing porn! :)');
  } else {
    var yearsTillAdult = 18 - age;
    alert('Sorry, you are not old enough for porn! :(. See you back in ' + yearsTillAdult + ' years')
  }
}
function FizzBuzz(min, max) {
  if (min > max) {
    min ^= max;
    max ^= min;
    min ^= max;
  }
  var number = Math.round(Math.random() * (max - min)) + min;
  if (number % 3 === 0 && number !== 0) {
    if (number % 5 === 0) {
      alert("fizzbuzz");
    } else {
      alert("fizz");
    }
  } else if (number % 5 === 0 && number !== 0) {
    alert("buzz");
  } else {
    console.log(number);
  }
}
