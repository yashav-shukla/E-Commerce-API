const {
  getAllProductsService,
  getProductByIdService,
  addProductService,
} = require("../services/productService");

const getAllProducts = (req, res) => {
  const result = getAllProductsService();

  res.send(result);
};

const getProductById = (req, res) => {
  const result = getProductByIdService(req.params.id);

  res.send(result);
};

const addProduct = (req, res) => {
  const result = addProductService();

  res.send(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};