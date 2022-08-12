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
        const {name,username,image,password,email} = req.body;
        await pool.query('INSERT INTO users (name,username,image,password,email) VALUES ($1,$2,$3,$4,$5) RETURNING *',
        [name,username,image,password,email],(error,result)=>{
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




const createComment = async (req,res)=>{
    const {content,user_id }= req.body.content;
    await pool.query('INSERT INTO comments (content,user_id) VALUES ($1,$2) RETURNING *',[content,user_id],(error,results)=>{
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
   [title,category,status,description,upvotes,id],(error,result)=>{
    if (error){
        res.send(error.message);
        throw error;
    }
    res.status(201).send(`Feedback modified with ID: ${result.rows[0].id}`);

   });


}

//deleting feedback

const deleteFeedback = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM product_features WHERE id = $1',[id],(error,results)=>{
        if(error){
            res.send(error.message);
            throw error;
        }
        res.status(200).send(`Feedback deleted with ID: ${results.rows[0].id}`);

    });
}








const getFeedback =async (req,res)=>{
    const id = (req.params.id);

   
    var products = [];
    var sqlResults =  await pool.query('SELECT * FROM product_features WHERE id = $1',[id]);
    
    try {
        products = [...sqlResults.rows];
        
         let newProducts =await Promise.all(
            products.map( async (val, ind,arr) => {
                var __res = await getCommentPerProduct(val.id);
                let currentObj = arr[ind];
                return val = {...val,comments: [...__res]};
            
            
            })
         );

         products = [...newProducts];

         console.log("new products",newProducts)
        
        
        
    } catch (error) {
        res.send(error.message)
            throw error;
    }
    
    return res.status(200).json(products);
}




const getAllFeedback =async (req,res)=>{
   
    var products = [];
    var sqlResults =  await pool.query('SELECT * FROM product_features');
    
    try {
        products = [...sqlResults.rows];
        
         let newProducts =await Promise.all(
            products.map( async (val, ind,arr) => {
                var __res = await getCommentPerProduct(val.id);
                let currentObj = arr[ind];
                return val = {...val,comments: [...__res]};
            
            
            })
         );

         products = [...newProducts];

         console.log("new yoyo products",newProducts)
        
        
        
    } catch (error) {
        res.send(error.message)
            throw error;
    }
    
    return res.status(200).json(products);
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

// GET COMMENTS PER PRODUCT FEATURE
async function getCommentPerProduct(product_id){
    let comments = [];
    let sqlResults = await pool.query('SELECT * FROM comments WHERE product_id = $1', [product_id]);
    try {
        comments = [...sqlResults.rows];
      
        let newComments = await Promise.all(
           comments.map(async (val,ind,arr)=>{
            var useResults = await getUserPerComment(val.id);
            return val = {...val,users:[...useResults]};
           }) 
        );

        comments = [...newComments];

    } catch (error) {
        console.error(error);
    }    
    return comments;
}

// GET USERS PER PRODUCT FEATURE COMMENT
async function getUserPerComment(id){
    let user = [];
    let results = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        try{
           user = [...results.rows];
        }catch(error){
            res.send(error.message);
            console.log(error);
            throw error;

        }
        console.log('user>>>',user);
        return user;
       
    
}

const addFeedback = async (req,res)=>{
    const { content,replyingTo,userId} = req.body;
    await pool.query('INSERT INTO replies (content,replying_to,user_id) VALUES ($1,$2,$3) RETURNING *',
    [content,replyingTo,userId],(error,result)=>{
        if(error){
            res.send(error.message);
            throw error;
        }
        res.status(201).send(`replies added with ID: ${id}`);
    });

}
//roadmap
    //title
    //category
    //status
    //number of comment
    //number of reply
const getRoadmap = async (req,res)=>{
    let roadmaps=[];
   
    let roadmap = await pool.query('SELECT * FROM product_features');
    try {
        roadmaps = [...roadmap.rows];
        
         let newProducts =await Promise.all(
            roadmaps.map( async (val, ind,arr) => {
                var __res = await (await (await getCommentPerProductTwo(val.id)));
                let currentObj = arr[ind];
               
                return val = {...val,comments: [...__res]};
            
            
            })
         );

         roadmaps = [...newProducts];

         console.log("new  products",roadmaps)
        
        
        
    } catch (error) {
        res.send(error.message)
            throw error;
    }
   
    
    return res.status(200).json(roadmaps);
}

async function getCommentPerProductTwo(product_id){
    let comments = [];
    let sqlResults = await pool.query('SELECT * FROM comments WHERE product_id = $1', [product_id]);
    try {
        comments = [...sqlResults.rows];
   

    } catch (error) {
        console.error(error);
    }  

   
    return comments;
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
app.get("/get-suggestion/:status",getSuggestion);
app.get("/roadmap",getRoadmap);
app.get("/add-replies",addFeedback);




//Start server
app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
