const express= require("express");

const router = express.Router();

//Get /products
router.get("/",(req,res)=>{
    res.send("Fetching all products");
});

//POST /products
router.post("/",(req,res)=>{
    res.send("Adding a new products");
});

//Get /products/:id
router.get("/:id",(req,res)=>{
    res.send(`Fetching products with ID: ${req.params.id}`);
});

module.exports=router;
