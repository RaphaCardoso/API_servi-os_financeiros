const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const conta = require('./conta');

const transacao = sequelize.define('transacoes', {

    ID_Conta: {
        type: DataTypes.INTEGER,
        references: {
            model: conta,
            key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
    },
    Conta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Transacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Valor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Data_Transacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },

},
    {
        timestamps: true // para armazenar a hora que foi criada e alterada
    }
);


module.exports = transacao;