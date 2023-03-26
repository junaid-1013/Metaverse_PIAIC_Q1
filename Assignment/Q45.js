function cars(manfc, md_name) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        Manufacturer: manfc,
        "Model Name": md_name
    };
    if (args) {
        for (var i = 0; i < args.length; i = i + 2) {
            car[args[i]] = args[i + 1];
        }
    }
    return car;
}
var obj = cars("Honda", "City", "year", 2010, "color", "red");
console.log(obj);
