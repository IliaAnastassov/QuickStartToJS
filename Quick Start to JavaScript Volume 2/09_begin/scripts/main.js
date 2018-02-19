var friends = ["Alice", "James", "Bob", "Mike", "Paula", "Danny", "Anna", "Mary"];

function greetPeople(people) {
    people.forEach(p => {
        console.log("Hey " + p + "!");
    });

    console.log("==============================")

    for (var i = 0; i < people.length; i++) {
        console.log("Hey " + people[i] + "!");
    }
};

try {
    greetPeople(friends);
} catch {
    console.log("Not an option");
}
