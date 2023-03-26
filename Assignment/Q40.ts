function make_albumb(artist_name:string,albumb_title:string,tracks:number=0){

    let music={
        artist: artist_name,
        title:albumb_title,
    }
    if (tracks){
        music["No of Tracks"]=tracks;
    }
    return music
}

let obj1 = make_albumb("Arijit","Khamoshian");
console.log(obj1);
let obj2 = make_albumb("Atif","Adat");
console.log(obj2);
let obj3 = make_albumb("Jubin","Hamnava",3);
console.log(obj3);
