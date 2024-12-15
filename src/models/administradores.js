const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const admin = sequelize.define('administradores', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true // para armazenar a hora que foi criada e alterada
});

module.exports = admin;