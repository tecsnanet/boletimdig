const db = require("../config/db")

const Professor = db.sequelize.define('professores', {
    cpf:{
        type: db.Sequelize.STRING(11),       
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
        defaultValue:1
    }
}) 
// Professor.sync({force:true})
module.exports = Professor;