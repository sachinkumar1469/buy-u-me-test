const express = require("express");

const router = express.Router();

const Product = require("./schema");



router.get("/",(req,res,next)=>{

    // This route will return all the products
    Product.find({})
    .then(result=>{
        res.json({
            message:"Products",
            data:result
        });
    })
    .catch(err=>{
        res.json({
            message:"Error in getting products"
        })
    })
    
});

// This route is used to update the data
router.post("/",(req,res,next)=>{
    console.log("In post route",req.body);
    let bodyData = req.body;

    bodyData.forEach(data=>{
        Product.findOne({
            productId:data.productId
        })
        .then(product=>{
            if(data.operation == 'add'){
                product.quantity += data.quantity
            } else {
                product.quantity -= data.quantity;
                if(product.quantity < 0){
                    product.quantity = 0;
                }
            }
            return product.save()
        })
        .then(savedProduct=>{
            console.log("Product updated")
        })
        .catch(err=>{
            console.log("Unable to find and update project",err)
        })
    });

    res.json({
        message:"Data succesfully updated"
    })
})


module.exports = router;