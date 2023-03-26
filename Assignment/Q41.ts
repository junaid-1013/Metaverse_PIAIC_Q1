let magicians=['John','Alice','Tom'];

function show_magicians(...args){
    for(let i=0;i<args[0].length;i++){
        console.log(args[0][i]);
    }
}
show_magicians(magicians);