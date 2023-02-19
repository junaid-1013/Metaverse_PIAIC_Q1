let guest_list = ['Taha','Humayon','Bilal'];
for (let i=0; i<3;i++){
    console.log("Hi! "+guest_list[i]+" I have arranged a dinner on Sunday Please come at my house");
}
console.log("\nNumber of people invited: "+guest_list.length);

console.log("\n"+guest_list[1]+" Can't be able to make it on Sunday");
guest_list[1]="Khubaib";
for (let i=0; i<3;i++){
    console.log("Hi! "+guest_list[i]+" I have arranged a dinner on Sunday Please come at my house");
}
console.log("\nNumber of people invited: "+guest_list.length);
guest_list.unshift("Bajwa");
guest_list.push("Rana");
guest_list.splice(3,0,"Tanzeel"); 
console.log("\nI just came to know I can invite three more people to the dinner");

for (let i=0; i<6;i++){
    console.log("Hi! "+guest_list[i]+" I have arranged a dinner on Sunday Please come at my house");
}
console.log("\nNumber of people invited: "+guest_list.length);

console.log("\n I just come to know that my new dinner table will not be arrive for the upcoming dinner day So I can only invite only two people appologies\n");
for (let i=0; i<4;i++)
{
    guest_list.splice(0,1);
}

for (let i=0; i<2;i++){
    console.log("Hi! "+guest_list[i]+" You are still invited at Sunday");
}
console.log("\nNumber of people invited: "+guest_list.length);
guest_list.splice(0,1);
guest_list.splice(0,1);

console.log(guest_list);

