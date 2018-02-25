var myCoffee = {
    flavor: "espresso",
    temperature: "piping hot",
    ounces: 66,
    milk: false,
    add(ounces) {
        this.ounces += ounces;
    },
    changeFlavor(flavor) {
        this.flavor = flavor
    }
};

alert(myCoffee.flavor + " " + myCoffee.ounces);

myCoffee.add(21);
myCoffee.changeFlavor("ristretto");

alert(myCoffee.flavor + " " + myCoffee.ounces);
