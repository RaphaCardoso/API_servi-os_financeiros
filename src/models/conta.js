const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const conta = sequelize.define('conta', {
    ID_Cliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Saldo: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }// para armazenar a hora que foi criada e alterada
}, {
    timestamps: true // para armazenar a hora que foi criada e alterada
});

module.exports = conta;

