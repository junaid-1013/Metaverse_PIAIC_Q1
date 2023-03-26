function sandwich() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("Items include in the sandwitch are: " + args);
}
sandwich("Chese slice", "Chicken");
sandwich("Chese slice", "Chicken", "Cabbage Leaf");
sandwich("Chese slice", "Chicken", "Cabbage Leaf", "Black Olives");
