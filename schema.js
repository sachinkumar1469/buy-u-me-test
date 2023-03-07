const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId:{
        type:Schema.Types.Number,
        unique:true
    },
    quantity:{
        type:Schema.Types.Number
    }
});

const Product = mongoose.model("products",productSchema);

module.exports = Product