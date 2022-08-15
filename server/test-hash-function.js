const {hashPassword, comparePassword} = require('./hash-function');
let textPassword = 'passw';
let hash;

hash = hashPassword(textPassword);

hash.then(hash => {
    //store hash in database

})

hash.then(hash => {
    comparePassword('pass', hash).then(bool => {
        if(bool) {
            //Code for authorization
            console.log('Welcome');
        } else {
            //Code to deny authorization
            console.log('User Not Found');
        }
    })

});
