const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const authorization = require("../middleware/authorization");

//Registering
router.post("/register", async (req, res) => {
  try {
    //1. Destructure the req.body (name, email, password)
    const { name, username, image, password, email } = req.body;

    //2. Check if user exists

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists!!");
    }

    //3. Bcrypt the user password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    //const bcryptPassword = await bcrypt.hash(password, 10);
    //4. Enter the new user inside our database
    const newUser = await pool.query(
      "INSERT INTO users (name,username,image,password,email) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [name, username, image, bcryptPassword, email]
    );

    //res.json(newUser.rows[0]);

    //5. Generate our jwt token
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

//login route
router.post("/login", async (req, res) => {
  try {
    //1. Destructure req.body
    const { username, password } = req.body;
    //2.Check if user doesn't exist

    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Password or Username is not correct");
    }

    //3. Check if incoming password is same as db password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    //console.log(validPassword);

    if (!validPassword) {
      return res.status(401).json("Username and Password is incorrect");
    }

    //4. give them a jwt token
    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error!");
  }
});
module.exports = router;
