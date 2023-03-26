let magicians=["John","Alice","Tom"];

function show_magicians(...args){
    for(let i=0;i<args[0].length;i++){
        console.log(args[0][i]);
    }
}
console.log("Original: ");
show_magicians(magicians);

let copy = magicians;

function make_great(){
    for(let i=0;i<magicians.length;i++){
        copy[i]="Great "+magicians[i];
    }
}

make_great();
console.log("Copied array with modification : ");
show_magicians(copy);