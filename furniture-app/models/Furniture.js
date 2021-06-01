// import {Schema, model} from "mongoose";
const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide the furniture name"]
    },

    price: {
        type: Number,
        required: [true, "Oops Furniture name is required"],
    },

    quantity:{
        type: Number,
        default: 0,
    },

    description: String,
} , {timestamps: true});

export default model('Furnitures', productSchema);