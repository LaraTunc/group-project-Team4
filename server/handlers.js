const items = require('././data/items.json');

// get all products
const getProducts = (req, res) => {
    return res.status(200).json({ status: 200, data: items });
}

// get all companies
const getCompanies = (req, res) => {
    return res.status(200).json({ status: 200, data: companies });
}

// get a single product
const getSingleProduct = (req, res) => {
    let productId = req.params.id;
    let productInfo = items.find((item) => item["_id"].toString() == productId);
    res.status(200).json({
        status: 200,
        data: productInfo
    })
}

// update stock
const updateStock = (req,res)=> {
    const incomingOrder = req.body; 
    // req.body = {"id": 1234, "quantity": Y}
    items.forEach((element)=>{
        if(element._id === incomingOrder.id) {
            element.numInStock = element.numInStock - incomingOrder.quantity;
        };
    })
    const item = items.find(element=> element._id === incomingOrder.id);
    res.status(200).json({
        "status": "success",
        item,
    });
}; 



module.exports = {
    getProducts,
    getCompanies,
    getSingleProduct,
    updateStock,
}