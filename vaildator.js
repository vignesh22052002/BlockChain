// Install validator: npm install validator
const validator = require('validator');

function isEmailValid(email) {
    return validator.isEmail(email);
}

console.log(isEmailValid('test@example.com')); // Output: true
