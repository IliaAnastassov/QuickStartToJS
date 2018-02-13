/*
 * This is QuickStartToJS Volume 1
 */
function AgePrompt() {
  var name = prompt("What is your name?");
  var input = prompt("How old are you," + " " + name + "?");
  var age = parseInt(input, 10);

  while (isNaN(age) || age < 0 || age > 100) {
    age = prompt("Sorry, this is not a valid age. How old are you?");
  }
  if (age >= 18) {
    alert("Hurray!!! You can now proceed to wathing porn! :)");
  } else {
    var yearsTillAdult = 18 - age;
    alert("Sorry, you are not old enough for porn! :(. See you back in" + " " + yearsTillAdult + " " + "years");
  }
}

function CapitalPrompt() {
  var answer = prompt("What is the capital of New York?");
  if (answer === "Albany") {
    alert("You are correct!");
  } else {
    alert("Sorry, " + answer + " is not the capital of New York.");
  }
}

function FavoriteColorPrompt() {
  var favoriteColor = prompt("What is your favorite color?");

  if (favoriteColor === "grey") {
    alert("You are so gay!");
  } else if (favoriteColor === "pink") {
    alert("I wish your balls shrink!");
  }
  else if (favoriteColor === "red") {
    alert("You are as gay as uncle Ted!");
  }
  else {
    alert("Meeeeh.");
  }
}

// Fizz Buzz game
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

// Zombie Apocalypse game
function ZombieApocalypse() {
  alert("Hello, this is a zombie apocalypse game!");
  var weapon = prompt("Choose your weapon");

  alert(weapon + " " + "is a good choice");
  alert("OMG you have encountered a zombie!");
  alert("Let\"s FIGHT!");

  var chanceOfWin = Math.round(Math.random());
  if (chanceOfWin === 1) {
    alert("Huuray! You killed the nasty zombie with your" + " " + weapon + "! You WON!!!")
  } else {
    alert("Ouups, you got bitten and it\"s just a matter of time before you and up as a nasty zombie yourself! You lost...");
  }
}
