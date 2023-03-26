function cars(manfc:string,md_name:string,...args){
    let car={
        Manufacturer:manfc,
        "Model Name":md_name,
    }
    if(args){
        for(let i=0;i<args.length;i=i+2){
            car[args[i]]=args[i+1];
        }
    }
    return car
}
let obj=cars("Honda","City","year",2010,"color","red");
console.log(obj);