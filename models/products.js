import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category_id:{
        type:ObjectId,
        ref:"Category"
    }
});

export default mongoose.model("Product",productSchema);