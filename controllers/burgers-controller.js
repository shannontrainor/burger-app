const express = require("express");
const router = express.Router();
//require burger.js
const burger = require("../models/burger.js")

//get req to direct to index/burger page
router.get("/", (req,res) => {
    res.redirect("/burgers");
});

//get req router for all burgers
router.get("/burgers", (req,res) => {
    burger.selectAll((burgerData) => {
        res.render("index",)    //render to html ****
    });
});

//post req router for new burger
router.post("/burgers/create", (req,res) => {
    burger.insertOne(req.body.name, (result) => {
        console.log(result);
        res.redirect("/");        //redirect to index
    });
});

//update req router
router.put("/burgers/:id", (req,res) => {
    burger.updateOne(req.params.id, (result) => {
        console.log(result);
        res.status(200);
    });
});

//export
module.exports = router;