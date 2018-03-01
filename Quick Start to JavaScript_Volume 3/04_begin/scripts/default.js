var MyCar = {
    Make: "Citroen",
    EngineType: "Petrol",
    Horsepower: 109,
    StartEngine: function() {
        alert("Vroooom");
    }
};

function Car(make, engineType, horsepower) {
    this.make = make,
    this.engineType = engineType,
    this.horsepower = horsepower
};




