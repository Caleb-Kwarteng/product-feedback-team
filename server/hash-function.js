const bcrypt = require("bcrypt");

async function hashPassword(plaintextPassword) {
    try{
        const hash = await bcrypt.hash(plaintextPassword, 10);
        return hash;
    } catch(err) {
        console.log(err);
    }
    
}
 
async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

module.exports = {hashPassword, comparePassword};