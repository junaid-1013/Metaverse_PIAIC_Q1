var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < num.length; i++) {
    if (num[i] == 1) {
        console.log('1st');
    }
    else if (num[i] == 2) {
        console.log('2nd');
    }
    else if (num[i] == 3) {
        console.log('3rd');
    }
    else {
        console.log(num[i] + 'th');
    }
}
