function make_albumb(artist_name, albumb_title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var music = {
        artist: artist_name,
        title: albumb_title
    };
    if (tracks) {
        music["No of Tracks"] = tracks;
    }
    return music;
}
var obj1 = make_albumb("Arijit", "Khamoshian");
console.log(obj1);
var obj2 = make_albumb("Atif", "Adat");
console.log(obj2);
var obj3 = make_albumb("Jubin", "Hamnava", 3);
console.log(obj3);
