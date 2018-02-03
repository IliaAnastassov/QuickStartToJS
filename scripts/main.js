/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var name = prompt('What is your name?');
var age = prompt('How old are you, ' + name + '?');
if (age >= 18) {
  alert('Hurray!!! You can now proceed to wathing porn! :)');
} else {
  var yearsTillAdult = 18 - age;
  alert('Sorry, you are not old enough for porn! :(. See you back in ' + yearsTillAdult + ' years')
}
