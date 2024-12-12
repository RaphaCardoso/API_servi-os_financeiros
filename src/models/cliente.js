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

});

module.exports = cliente;