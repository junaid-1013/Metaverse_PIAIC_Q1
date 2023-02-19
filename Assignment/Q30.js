var usernames = ['admin', 'Junaid', 'Taha', 'Khubaib', 'Rana'];
for (var i = 0; i < 5; i++) {
    if (usernames[i] == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + usernames[i] + ", thankyou for logging in again");
    }
}
