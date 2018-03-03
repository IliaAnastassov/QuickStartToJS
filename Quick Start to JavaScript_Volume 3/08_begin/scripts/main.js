function alertNumberOne() {
    var numberOne = 1;
    alert(numberOne);

    function alertNumberTwo() {
        var numberTwo = 2;
        alert(numberTwo);

        function alertNumberThree() {
            var numberThree = 3;
            alert(numberThree);
            alert(numberTwo);
            alert(numberOne);
        }
        alertNumberThree();

        alert(numberOne);
    }
    alertNumberTwo();
}

alertNumberOne();
