const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const cliente = require('./cliente');

const notificacao = sequelize.define('notificacoes', {

    ID_Cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: cliente,
            key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false,
    },
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

module.exports = notificacao;