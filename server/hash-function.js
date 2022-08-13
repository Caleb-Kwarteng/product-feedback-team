const bcrypt = require("bcrypt");

const saltRounds = 6;

const passwordHash = async (password) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      return await bcrypt.hash(password, salt);
    } catch (err) {
        console.log(err);
    //   return err;
    }
    return null;
  };
  
  module.exports = passwordHash;