var str = "jehanzaib is a very smart boy ";
var split_list = [];
var temp = '';
for (var i = 0; i <= str.length; i++) {
    if (str[i] == " ") {
        split_list.push(temp);
        temp = '';
    }
    else {
        temp = temp + str[i];
    }
}
console.log(split_list);
for (var j = 0; j < split_list.length; j++) {
    for (var i = 0; i <= split_list.length; i++) {
        if (split_list[i] > split_list[i + 1]) {
            var temp1 = split_list[i];
            split_list[i] = split_list[i + 1];
            split_list[i + 1] = temp1;
        }
    }
}
console.log(split_list);
