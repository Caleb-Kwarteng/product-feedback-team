const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
//Set Up Middleware
app.use(cors());
app.use(express.json());

//Routes//

//Create a feedback

//Get a feedback

//Get all feedbacks

//Edit Feedback

//Delete a feedback

//Start server
app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
