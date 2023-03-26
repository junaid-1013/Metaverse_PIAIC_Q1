var str = "door chalis baba ali daniyal abc ";
var tempstr = '';
// abc ali baba chalis daniyal door
var list = [];
for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
        list.push(tempstr);
        tempstr = '';
    }
    else {
        tempstr = tempstr + str[i];
    }
}
console.log(list);
for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
        if (list[j] > list[j + 1]) {
            var temp1 = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp1;
        }
    }
}
console.log(list);
