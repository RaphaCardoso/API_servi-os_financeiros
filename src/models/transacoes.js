const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const transacoes = sequelize.define('transacoes', {

    // ID_Conta chave estrangeira
    // Tipo de Conta ( Corrente, Poupança, Salário, Mista, Digital, Universitária, Conjunta, Solidária )
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


module.exports = transacoes;