const db = require("../config/db")

const Aluno = db.sequelize.define('alunos', {
    matricula:{
        type: db.Sequelize.STRING(8),       
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING(20),
        allowNull: false,
    },
    email:{
        type: db.Sequelize.STRING(100),
        allowNull: false,
    },
    senha:{
        type: db.Sequelize.STRING(8),
        allowNull: false        
    },
    permissao:{
        type:db.Sequelize.SMALLINT(2),
        defaultValue:2
    }
}) 
// Aluno.sync({force:true})
module.exports = Aluno;