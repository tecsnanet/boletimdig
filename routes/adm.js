const express = require("express");
const res = require("express/lib/response");
const Aluno = require("../model/Aluno");
const Professor = require("../model/Professor");
const router = express.Router()

// router.get("/adm",(req,res)=>{
//     res.render("admin/pagInicial")
// })
// router.get('/cadAluno',(req,res)=>{
//     res.render("admin/cadastrarAluno")
// })
// router.get('/cadProfessor',(req,res)=>{
//     res.render("admin/cadastrarProfessor")
// })

router.post('/cadastroAluno',(req,res)=>{
    Aluno.create({
        nome:req.body.nome,
        email: req.body.email,
        senha:req.body.senha,
        matricula: req.body.matricula
    }).then(()=>{
        res.send("Aluno Cadastrado com sucesso")
    }).catch((err)=>{
        // res.send("Erro ao cadastrar" + err)
        res.send("erro" + err)
    })
})

router.post('/cadastroProfessor',(req,res)=>{
    Professor.create({
        cpf: req.body.cpf,
        nome:req.body.nome,
        email: req.body.email,
        senha:req.body.senha
    }).then(()=>{
        res.send("Professor Cadastrado com sucesso")
    }).catch((err)=>{
        // res.send("Erro ao cadastrar" + err)
        res.send("erro" + err)
    })
})

module.exports = router