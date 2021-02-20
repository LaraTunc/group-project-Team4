const items = require("././data/items.json");
const companies = require("././data/companies.json");

// get all products
const getProducts = (req, res) => {
  return res.status(200).json({ status: 200, data: items });
};

const getPaginatedProducts = (req, res) => {
  const { page, limit } = req.query;
  console.log(page, limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const availableItems = items.filter((item) => item.numInStock > 0);
  const itemsToSend = availableItems.slice(startIndex, endIndex);

  return res.status(200).json({ status: 200, data: itemsToSend });
};

// get all companies
const getCompanies = (req, res) => {
  return res.status(200).json({ status: 200, data: companies });
};

// get a single product
const getSingleProduct = (req, res) => {
  let productId = req.params.id;
  let productInfo = items.find((item) => item["_id"].toString() === productId);

  res.status(200).json({
    status: 200,
    data: productInfo,
  });
};

// update stock
const updateStock = (req, res) => {
  const incomingOrder = req.body;
  // req.body = [{"id": 1234,name:"etc",...},{"id": 1234,name:"etc",...},...]
  const returnArr=[];

  items.forEach((item) => {
    incomingOrder.forEach((order)=>{
      if(item._id === order._id) {
        item.numInStock --;
        if(item.numInStock===0) {
          res.status(400).json({
            status:"error",
            error:`${item.name} does not have enough stock. Only ${item.numInStock} is available.`
          });
        };
        returnArr.push(item);
      };
    });
  });

  res.status(200).json({
    status: "success",
    returnArr,
  });
};

module.exports = {
  getProducts,
  getCompanies,
  getSingleProduct,
  updateStock,
  getPaginatedProducts,
};
