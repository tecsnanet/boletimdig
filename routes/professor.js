const express = require("express");
const router = express.Router()

router.get("/loginProfessor",(req,res)=>{
    res.render("loginProfessor")
})

module.exports = router