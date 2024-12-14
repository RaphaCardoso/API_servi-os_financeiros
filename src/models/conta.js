const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const cliente = require('./cliente');

const conta = sequelize.define('conta', {
    ID_Cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: cliente,
            key: 'id'
        },
        onDelete: 'CASCADE',
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

