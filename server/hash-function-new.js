const bcrypt = require("bcrypt");

// const passwordHash = (plaintextPassword) => {
//     bcrypt.genSalt(10, (err, salt) => {
//         if (err){
//             console.log(err);
//             return null;
//         }
    
//         bcrypt.hash(plaintextPassword, salt, function(err, hash) {
//             if(err) {
//                 console.log(err)
//             }
//             // Store hash in the database
//             console.log(hash);
//             // return hash;
//         });
//     })
// }

// passwordHash('password');

// function hashPassword(plaintextPassword) {
//     bcrypt.hash(plaintextPassword, 10)
//         .then(hash => {
//             // Store hash in the database
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
 
// function comparePassword(plaintextPassword, hash) {
//     bcyrpt.compare(plaintextPassword, hash)
//         .then(result => {
//             return result
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

let textPassword = 'password';
let hash;
async function hashPassword(plaintextPassword) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash;
    // Store hash in the database
}
 
// compare password
async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

hash = hashPassword(textPassword);
hash.then(hash => {
    comparePassword('passwor', hash).then(bool => {
        if(bool) {
            console.log('fuck it, come in');
        } else {
            console.log('fuck off creep');
        }
        // console.log(bool);
    })

})


module.exports = hashPassword;