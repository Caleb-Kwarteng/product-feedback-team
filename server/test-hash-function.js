// const bcrypt = require("bcrypt");
// const passwordHash = require('./hash-function.js');
const passwordHash = require('./hash-function-new.js');
// console.log(passwordHash('password'));

// const callPasswordHash = require('./hash-function');

// console.log(callPasswordHash('password'));

// const hashTest = async (password) => {
//     // console.log(await passwordHash(password));
//     return await passwordHash(password);
// }

console.log(passwordHash('password'));

// console.log(hashTest('password'));