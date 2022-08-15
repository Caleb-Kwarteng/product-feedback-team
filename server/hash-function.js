const bcrypt = require("bcrypt");

const saltRounds = 6;

const passwordHash = async (password) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);

      // console.log('gedaader' + hash);

      return hash;

      // console.log(await bcrypt.hash(password, salt));
    } catch (err) {
        console.log(err);
    //   return err;
    }
    return null;
  };
  

  // const pt = (password) => {
  //   passwordHash(password)
  //   .then(hash => {
  //     console.log(hash);
  //     return hash;
  //   })
  //   .catch (err => {
  //     console.log(err);
  //   });
  // }

  // console.log(pt('password'));

  // passwordHash('password')

  // const comparePasswords = async (password, hash) => {
    
  //   try {
  //     const matchFound = await bcrypt.compare(password, hash);
  //     return matchFound;
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   return false;
  // };
  
  // const hash = passwordHash('password');

  // console.log(comparePasswords('password', hash));


  module.exports = passwordHash;