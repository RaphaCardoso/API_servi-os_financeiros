const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const cliente = sequelize.define('cliente', {

    Nome_Cliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true // para armazenar a hora que foi criada e alterada
});

module.exports = cliente;