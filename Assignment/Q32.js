var current_users = ['admin', 'Junaid', 'Taha', 'Khubaib', 'Rana'];
var new_user = ['Junaid', 'Haider', 'Hamza', 'Zain', 'Rana'];
var flag = false;
for (var i = 0; i < new_user.length; i++) {
    for (var j = 0; j < current_users.length; j++) {
        if (new_user[i] == current_users[j]) {
            flag = true;
        }
    }
    if (flag == true) {
        console.log("The username \'" + new_user[i] + "\'is not available please enter a new username");
        flag = false;
    }
    else {
        console.log("The username \'" + new_user[i] + "\' is available");
    }
}
