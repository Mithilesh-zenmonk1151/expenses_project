const express = require("express");
const router= express.Router();

const {
    
    AddExpences
}= require("../controller/AddExpences")




router.post("/addexp", AddExpences)
module.exports = router
