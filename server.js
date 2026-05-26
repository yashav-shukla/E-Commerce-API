const express = require("express");

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce API");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});