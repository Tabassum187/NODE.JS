let bcrypt = require("bcryptjs");

let mypassword = "tab123";
let salt = 12;
let encrypted_password = bcrypt.hashSync(mypassword, salt);


let check = bcrypt.compareSync(mypassword, encrypted_password);
if (check) {
    console.log("Password Matched");
} else {
    console.log("Password NOT Matched");
}

console.log(`Original Password ${mypassword}\nEncrypted Password ${encrypted_password}`);
