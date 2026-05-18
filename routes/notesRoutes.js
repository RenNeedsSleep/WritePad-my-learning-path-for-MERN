import express, { Router } from "express";

const router = express.Router();

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



export default Router;
