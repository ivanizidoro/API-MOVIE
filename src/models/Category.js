import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    createDAT:{
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model('Category', categorySchema)