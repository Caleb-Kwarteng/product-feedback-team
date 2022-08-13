const bcrypt = require("bcrypt");

const passwordHash = async (password, saltRounds) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      return await bcrypt.hash(password, salt);
    } catch (err) {
        console.log(err);
    //   return err;
    }
    // return null;
  };
  