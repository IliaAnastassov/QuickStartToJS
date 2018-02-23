/*  PLANNING A PROJECT:
-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

I want to create a zombie text adventure game where the player 
starts with a random scenario. They search for a weapon and fight a zombie.
The player has a 33% chance of getting bitten and losing, or killing the zombie and winning.

-----------------------------------------------
2. What steps do you think are necessary?
-----------------------------------------------

Beginning:
1. Write scenarios
2. Store a list of possible scenarios
3. Alert a random scenario from the list of possible scenarios 

Weapon:
1. Create a list of weapons 
2. Save the list of weapons
3. Alert which weapon the player finds

-----------------------------------------------
3. What syntax or coding patterns might you use?
-----------------------------------------------

Arrays for lists
Need multiple random numbers so a randomNumber function

-----------------------------------------------
Remember: There are many ways to create things with code! The most important part is to write it and get it working.  
If you can't get something to work, try making it simpler. After, look for ways you might improve your code! 
*/

function randomNumber(min, max) {
    if (min > max) {
        // Swap values of min and max
        min ^= max;
        max ^= min;
        min ^= max;
    }

    return Math.round(Math.random() * (max - min)) + min;
}

// TODO: Replace scenarios with actual ones
var scenarioOne = "This is scenario one";
var scenarioTwo = "This is scenario two";
var scenarioThree = "This is scenario three";
var scenarioFour = "This is scenario four";

var scenarios = [scenarioOne, scenarioTwo, scenarioThree, scenarioFour];
var scenarioIndex = randomNumber(0, scenarios.length - 1);
var scenario = scenarios[scenarioIndex];
alert(scenario);
alert("Suddenly you encounter a zombie! You start searching for a weapon to fight it.")

var weapons = ["axe", "hammer", "sword", "pistol", "rifle", "bat", "broken bottle", "knife", "machine gun", "granade"];
var weaponIndex = randomNumber(0, weapons.length - 1);
var weapon = weapons[weaponIndex];
alert("You found a " + weapon + "!");
alert("You start fighting the zombie with it...");

var outcomeNumber = randomNumber(0, 100);
if (outcomeNumber > 33) {
    alert("You killed the zombie! You won!!!");
} else {
    alert("You got bitten. You loose.");
}
