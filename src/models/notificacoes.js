const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const notificacoes = sequelize.define('notificacoes', {

    // ID_Cliente chave estrangeira
    Mensagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Data_Notificacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },

}, {
    timestamps: true // para armazenar a hora que foi criada e alterada
});

module.exports = notificacoes;