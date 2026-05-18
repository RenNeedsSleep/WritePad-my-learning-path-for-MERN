import express, { Router } from "express";
import { createNotes, deleteNotes, getAllNotes, updateNotes } from "../controllers/notesController.js";

const router = express.Router();

/*
router.get("/", (req,res)=> {
});

router.post("/", (req,res) => {
    res.status(201).json({message:"post created successfully"})
})

router.put("/:id", (req,res) => {
    res.status(200).json({message:"Updated note successfully"})
})

router.delete(":id", (req,res) => {
    res.status(200).json({message:"note deleted successfully"})
})
*/

//above is the first stage of having routes with no individuality

router.get("/",getAllNotes);

router.post("/",createNotes);

router.put("/",updateNotes);

router.delete("/",deleteNotes);

//basically we are calling each function from another file specified for controllers



export default Router;
