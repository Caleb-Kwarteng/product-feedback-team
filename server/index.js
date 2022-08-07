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

//Create a user

const addUser = async(req,res)=>{
    try{
        const {name,username,image,password} = req.body;
        await pool.query('INSERT INTO users (name,username,image,password) VALUES ($1,$2,$3,$4) RETURNING *',
        [name,username,image,password],(error,result)=>{
            if(error){
                res.send(error.message);
                throw error;

            }
           
            res.status(201).send(`new user added with ID: ${result.rows[0].id}`);

        });

    }catch(error){
        res.send(error.message);
    }

}


const productRequest = async (req,res)=>{
    try{

        const {title,category,description,status,upvotes}=req.body;
    
        await pool.query('INSERT INTO product_features (title,category,description,status,upvotes) VALUES ($1,$2,$3,$4,$5) RETURNING *', 
        [title,category,description,status,upvotes],(error,results)=>{
            if(error){
                res.send(error.message);

                throw error;
            }
            
            res.status(201).send(`product request added with ID: ${results.rows[0].id}`);

        });

    }catch(err){
        res.send(err.message);
    }

}

//creating feedback

// const createComment =async(req,res)=>{
//     const content = req.body;
//     await pool.query('INSERT INTO comments (content) VALUES ($1,) RETURNING *',
//     [content],(error,result)=>{
//         if(error){
//             res.send(error.message);
//             throw error;
//         }
     
//         res.status(201).send(`saved successful with ID:${result.rows[0].id}`);

//     });
// }


const createComment = async (req,res)=>{
    const content = req.body.content;
    await pool.query('INSERT INTO comments (content) VALUES ($1) RETURNING *',[content],(error,results)=>{
        if(error){
            res.send(error.message);
            throw error;
        }
        res.status(201).send(`comment add successfully with ID: ${results.rows[0].id}`)

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

const deleteFeedback = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM product_features WHERE id = $1',[id],(error,results)=>{
        if(error){
            res.send(error.message);
            throw error;
        }
        res.status(200).send(`Feedback deleted with ID: ${id}`);

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

const getFeedback = (req,res)=>{
    const id = (req.params.id);
    pool.query('SELECT * FROM product_features WHERE id = $1',[id],(error,result)=>{
        if(error){
            res.send(error.message)
            throw error;
        }
        res.status(200).json(result.rows);

    });

}

const getAllFeedback = (req,res)=>{
    //const id = (req.params.id);
    pool.query('SELECT * FROM product_features',(error,result)=>{
        if(error){
            res.send(error.message)
            throw error;
        }
        res.status(200).json(result.rows);

    });

}

const getSuggestion = (req,res)=>{
    const status = "suggestion";
    pool.query('SELECT * FROM product_features WHERE status = $1',[status],(error,results)=>{
        if(error){
            res.send(error.message);
            throw error;
        }
        res.status(200).json(results.rows);

    });

}

//Get a feedback

//Get all feedbacks

//Edit Feedback

//Delete a feedback

//routes
app.post("/create-comment",createComment);
app.post("/products-request",productRequest);
app.post("/add-user",addUser);
app.put("/edit-feedback/:id",editFeedback);
app.delete("/delete-feedback/:id",deleteFeedback);
app.get("/get-feedback",getAllFeedback);
app.get("/get-feedback/:id",getFeedback);
app.get("/get-suggestion/:status",getFeedback);



//Start server
app.listen(4001, () => {
    console.log("Server is running on port 4001");
});