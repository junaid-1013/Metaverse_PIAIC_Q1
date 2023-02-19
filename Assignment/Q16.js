var guest_list = ['Taha', 'Humayon', 'Bilal'];
for (var i = 0; i < 3; i++) {
    console.log("Hi! " + guest_list[i] + " I have arranged a dinner on Sunday Please come at my house");
}
console.log(guest_list[1] + " Can't be able to make it on Sunday");
guest_list[1] = "Khubaib";
for (var i = 0; i < 3; i++) {
    console.log("Hi! " + guest_list[i] + " I have arranged a dinner on Sunday Please come at my house");
}
guest_list.unshift("Bajwa");
guest_list.push("Rana");
guest_list.splice(3, 0, "Tanzeel");
console.log("I just came to know I can invite three more people to the dinner");
for (var i = 0; i < 6; i++) {
    console.log("Hi! " + guest_list[i] + " I have arranged a dinner on Sunday Please come at my house");
}
