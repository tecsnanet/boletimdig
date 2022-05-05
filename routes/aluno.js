const express = require("express");
const router = express.Router()
const Aluno = require("../model/Aluno")

router.get("/loginAluno",(req,res)=>{
    res.render("loginAluno")
})



module.exports = router