let str = "door chalis baba ali daniyal abc ";
let tempstr='';

// abc ali baba chalis daniyal door


let list=[];
for (let i=0; i<str.length; i++){
    if(str[i]==' '){
        list.push(tempstr);
        tempstr='';
    }
    else{
        tempstr= tempstr+str[i];
    }

}
console.log(list);

for (let i=0; i<str.length; i++){
    for (let j=0; j<str.length ; j++ ){
        if(list[j] > list[j+1]){
            let temp1=list[j];
            list[j]=list[j+1];
            list[j+1]=temp1;
        }
    }
}
console.log(list);