const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
//Set Up Middleware
app.use(cors());
app.use(express.json());


//Routes//
app.get("/",(req,res)=>{
    res.send("Testing Project.......00000..................");

});

//Create a feedback

app.post("/products-request",async (req,res)=>{
  

    try{
        const {title, category,description}=req.body;
     
        const newFeedback=await pool.query('INSERT INTO product_features (title,category,description) VALUES ($1,$2,$3) RETURNING *', 
        [title,category,description],(error,results)=>{
            if(error){
                res.send(error.message);

                throw error;
            }
            res.json(newFeedback.row[0]);
            res.status(201).send(`request added`)

        });

    }catch(err){
        res.send(err.message);
    }

});

app.path("/update-feedback",(req,res)=>{
    const feedbackTitle =req.body.feedbackTitle;
    const category = req.body.category;
    const detail = req.body.detail;

});

app.post("/category",(req,res)=>{
    const category = req.body.category;
    

});

app.get("/roadmap",(req,res)=>{
    //title
    //category
    //status
    //number of comment
    //number of reply

});

app.get("/get-all-feedback",(req,res)=>{

});

//Get a feedback

//Get all feedbacks

//Edit Feedback

//Delete a feedback



//Start server
app.listen(4001, () => {
    console.log("Server is running on port 4001");
});