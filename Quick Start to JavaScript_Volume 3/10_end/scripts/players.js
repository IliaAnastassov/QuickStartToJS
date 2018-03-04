function Player(name, characterClass, health, mana, strength, speed, dexterity, magic) {
    this.name = name;
    this.characterClass = characterClass;
};

function SetSkills(player) {
    if (player.characterClass == "barbarian") {
        player.health = 100;
        player.mana = 20;
        player.strength = 10;
        player.speed = 5;
        player.dexterity = 4;
        player.magic = 1;
    } else if (player.characterClass == "assassin") {
        player.health = 80;
        player.mana = 40;
        player.strength = 3;
        player.speed = 7;
        player.dexterity = 8;
        player.magic = 2;
    } else if (player.characterClass = "necromancer") {
        player.health = 20;
        player.mana = 100;
        player.strength = 1;
        player.speed = 4;
        player.dexterity = 5;
        player.magic = 10;
    }
}

var numberOfPlayers = prompt("Enter the number of players");
var players = [];

for (i = 0; i < numberOfPlayers; i++) {
    var player = new Player();
    player.name = prompt("Name your character:");
    player.characterClass = prompt("Choose character class: Barbarian, Assassin or Necromancer:").toLowerCase();
    SetSkills(player);
    players.push(player);    
}

players.forEach(player => {
    console.log("*****")
    console.log("Name: " + player.name);
    console.log("Class: " + player.characterClass);
    console.log("Health: " + player.health);
    console.log("Mana: " + player.mana);
    console.log("Strenght: " + player.strength);
    console.log("Speed: " + player.speed);
    console.log("Dexterity: " + player.dexterity);
    console.log("Magic: " + player.magic);
});