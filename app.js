const express = require("express")
const app = express()
const session = require("express-session")
app.use(express.static('public'));
app.use(express.static(__dirname + "/public"))
const bodyParser = require("body-parser")
const { engine } = require ('express-handlebars');
const aluno = require("./routes/aluno")
const professor = require("./routes/professor")
const adm = require("./routes/adm")
const Aluno = require("./model/Aluno");
const Professor = require("./model/Professor");
const Adm = require ("./model/Adm")
const port = 3000
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use('/aluno', aluno)
app.use('/professor', professor)
app.use('/adm', adm)

app.use(session({
    secret: 'ehfukehvzjdhv',
    // cookie: {maxAge : 60000}, 
    resave:true,
    saveUninitialized: true
}));

app.get('/',(req,res)=>{
    res.render("index")
})
app.get("/admin",(req,res)=>{
    res.render("admin")
})
//login aluno
app.post('/loginAluno', (req, res) =>{
    Aluno.findAll({
        where:{
            // id:req.body.id,
            matricula:req.body.matricula,
            senha: req.body.senha
        }
    }).then((data) => {
        const matricula = data[0].get('matricula')
        const senha = data[0].get('senha')
        const permissao = data[0].get('permissao')
        req.session.matricula= matricula;
        req.session.senha = senha;
        if(permissao == 2){           
            res.render('pagAluno', {dados:data})
            // res.send("sucesso")
        }if(permissao == 0){
            req.session.permissao = permissao;
            res.render('adm', {dados:data})
        }
                    
    }).catch((err)=>{
        // res.render('login', {menssagemErro:true})
        res.send("erro" + err)
    })  
});

//login professor

app.post('/loginProfessor', (req, res) =>{
    Professor.findAll({
        where:{
            // id:req.body.id,
            cpf:req.body.cpf,
            senha: req.body.senha
        }
    }).then((data) => {
        const cpf = data[0].get('cpf')
        const senha = data[0].get('senha')
        const permissao = data[0].get('permissao')
        req.session.cpf = cpf;
        req.session.senha = senha;
        if(permissao == 1){           
            res.render('pagProfessor', {dados:data})
            // res.send("sucesso")
        }if(permissao == 0){
            req.session.permissao = permissao;
            res.render('adm', {dados:data})
        }
                    
    }).catch((err)=>{
        // res.render('login', {menssagemErro:true})
        res.send("erro" + err)
    })  
});

//login admin

app.post('/admin/', (req, res) =>{
    Adm.findAll({
        where:{
            // id:req.body.id,
            login:req.body.login,
            senha: req.body.senha
        }
    }).then((data) => {
        const login = data[0].get('login')
        const senha = data[0].get('senha')
        const permissao = data[0].get('permissao')
        req.session.login = login;
        req.session.senha = senha;
        if(permissao == 1 || permissao == 2){           
            // res.render('pagProfessor', {dados:data})
            res.send("vc não tem permisão de administrador")
        }if(permissao == 0){
            req.session.permissao = permissao;
            res.render('admin/pagInicial', {dados:data})
        }
                    
    }).catch((err)=>{
        // res.render('login', {menssagemErro:true})
        res.send("erro" + err)
    })  
});

app.listen(port,()=>{
    console.log("ta rodando essa merda, caralho!!")
})