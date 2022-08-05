const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const { query } = require("express");
//Set Up Middleware
app.use(cors());
app.use(express.json());


//Routes//
app.get("/",(req,res)=>{
    res.send("Hello, from product feedback");

});

//Create a feedback

const addUser = async(req,res)=>{
    try{
        const {id,name,username,image,password} = req.body;
        await pool.query('INSERT INTO users (id,name,username,image,password) VALUES ($1,$2,$3,$4,$5) RETURNING *',
        [id,name,username,image,password],(error,result)=>{
            if(error){
                res.send(error.message);
                throw error;

            }
           
            res.status(200).send("new user added");

        });

    }catch(error){
        res.send(error.message);
    }

}


const productRequest = async (req,res)=>{
    try{
        const {id,title, category,description,status,upvotes}=req.body;
     
        await pool.query('INSERT INTO product_features (id,title,category,description,status,upvotes) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *', 
        [id,title,category,description,status,upvotes],(error,results)=>{
            if(error){
                res.send(error.message);

                throw error;
            }
            
            res.status(201).send("request added successfully");

        });

    }catch(err){
        res.send(err.message);
    }

}

//creating feedback

const createComment =async(req,res)=>{
    const {id,content,user_id} =req.body;
    await pool.query('INSERT INTO comments (id,content,user_id) VALUES ($1,$2,$3) RETURNING *',
    [id,content,user_id],(error,result)=>{
        if(error){
            res.send(error.message);
            throw error;
        }
        res.status(201).send("comment add successfuly");

    });
}

//editting feedback

const editFeedback =  (req,res)=>{
    const id = parseInt(req.params.id);
   const {title,category,status,description,upvotes} = req.body;
   pool.query('UPDATE product_features SET title = $1, category = $2 , status = $3, description = $4 ,upvotes =$5 WHERE id = $6',
   [title,category,status,description,upvotes],(error,result)=>{
    if (error){
        res.send(error.message);
        throw error;
    }
    res.status(200).send(`Feedback modified with ID: ${id}`);

   });


}





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

//routes
app.post("/create-comment",createComment);
app.post("/products-request",productRequest);
app.post("/add-user",addUser);
app.put("/edit-feedback/:id",editFeedback);



//Start server
app.listen(4001, () => {
    console.log("Server is running on port 4001");
});