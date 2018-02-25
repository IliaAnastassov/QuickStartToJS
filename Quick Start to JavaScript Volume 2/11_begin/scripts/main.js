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

function randomNumber(range) {
    return Math.round(Math.random() * range);
}

var scenarios = [
    "You wake up in a hospital. It's eerily quiet. You tiptoe to the door and peek out.",
    "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.",
    "Desperate times call for desperate measures. You see a small convinience store up ahead and decide to loot it for goods.",
    "In a search for tools and weapons, you are sneaking into a fire station. You try the front door, but it's locked, so you use the window next to the door."
];

alert(scenarios[randomNumber(scenarios.length - 1)]);

var weapons = ["axe", "hammer", "sword", "pistol", "rifle", "baseball bat", "broken bottle", "knife", "machine gun", "shovel"];
var weapon = weapons[randomNumber(weapons.length - 1)];

alert("You start searching for a weapon. After surveying your surroundings you find nottice and grab a " + weapon + ".");

alert("Suddenly a zombie bursts through the door! You ready your " + weapon + " and advance towards the zombie.");

var outcomeNumber = randomNumber(2);
if (outcomeNumber === 0) {
    alert("You got bitten. You lose.");
} else {
    alert("You killed the zombie with the " + weapon + "! You won!!!");
}
