const items = require('././data/items.json');
const companies = require('././data/companies.json');

// get all products
const getProducts = (req, res) => {
    
    // const page = req.query.page;
    // const limit = req.query.limit;
    // const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;
    // const result = items.slice(startIndex, endIndex);
    // res.json(result)

    // return res.status(200).json({ status: 200, data: result });
    return res.status(200).json({ status: 200, data: items });
}

// get all companies
const getCompanies = (req, res) => {
    return res.status(200).json({ status: 200, data: companies });
}

// get a single product
const getSingleProduct = (req, res) => {
    let productId = req.params.id;
    let productInfo = items.find((item) => item["_id"].toString() === productId);

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