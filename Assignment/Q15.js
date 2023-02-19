var guest_list = ['Taha', 'Humayon', 'Bilal'];
for (var i = 0; i < 3; i++) {
    console.log("Hi! " + guest_list[i] + " I have arranged a dinner on Sunday Please come at my house");
}
console.log(guest_list[1] + " Can't be able to make it on Sunday");
guest_list[1] = "Khubaib";
for (var i = 0; i < 3; i++) {
    console.log("Hi! " + guest_list[i] + " I have arranged a dinner on Sunday Please come at my house");
}
