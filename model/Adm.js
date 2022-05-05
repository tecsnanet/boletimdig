const db = require("../config/db")

const Adm = db.sequelize.define('Adms', {
    id:{
        type: db.Sequelize.INTEGER(),   
        autoIncrement: true,    
        allowNull: false,
        primaryKey: true
    },
    // nome:{
    //     type: db.Sequelize.STRING(20),
    //     allowNull: false,
    // },
    // email:{
    //     type: db.Sequelize.STRING(100),
    //     allowNull: false,
    // },
    login:{
        type: db.Sequelize.STRING(),
        allowNull: false,
        defaultValue: "admin"

    },
    senha:{
        type: db.Sequelize.STRING(),
        allowNull: false,
        defaultValue: "admin"        
    },
    permissao:{
        type:db.Sequelize.SMALLINT(2),
        defaultValue:0
    }
}) 
// Adm.sync({force:true})
module.exports = Adm;