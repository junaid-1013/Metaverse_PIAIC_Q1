var magicians = ["John", "Alice", "Tom"];
function show_magicians() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args[0].length; i++) {
        console.log(args[0][i]);
    }
}
show_magicians(magicians);
function make_great() {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
}
make_great();
show_magicians(magicians);
