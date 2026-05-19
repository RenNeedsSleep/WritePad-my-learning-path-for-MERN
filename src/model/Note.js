import mongoose from "mongoose";

// 1- create a schema
//2- model based on that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
    { timestamps: true } //createdAt and updatedAt is true as default
);

const Note = mongoose.model("Note", noteSchema)
// a sort of object for the schema

export default Note