const express = require("express");

const app = express();

app.use(express.json());

//Import Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

//Use Routes
app.use("/users",userRoutes);
app.use("/products",productRoutes);
app.use("/cart",cartRoutes)

//Server
const PORT = 3000;


//Home 
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Ecommerce-API ! </h1>")
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});