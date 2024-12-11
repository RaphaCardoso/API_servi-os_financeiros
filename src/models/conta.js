const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Conta = sequelize.define('conta', {
    ID_Cliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Saldo: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
})

