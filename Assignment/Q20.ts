let str = "jehanzaib is a very smart boy ";

let split_list=[];
let temp='';

for (let i=0 ; i<=str.length ;i++){
    if (str[i]==" "){
        split_list.push(temp);
        temp='';
    }
    else{
        temp = temp + str[i];
    }
}

console.log(split_list);

for (let j=0; j<split_list.length; j++){
    for (let i=0; i<=split_list.length ; i++){
        if (split_list[i] > split_list[i+1]){
            let temp1=split_list[i];
            split_list[i]=split_list[i+1];
            split_list[i+1]=temp1;
        }
    }
}
console.log(split_list);



