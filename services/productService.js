const getAllProductsService = () => {
    return "Fetching all products";
  };
  
  const getProductByIdService = (id) => {
    return `Fetching product with ID: ${id}`;
  };
  
  const addProductService = () => {
    return "Adding a new product";
  };
  
  module.exports = {
    getAllProductsService,
    getProductByIdService,
    addProductService,
  };