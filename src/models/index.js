const fs = require('fs');

const path = require('path');

const sequelize = require('../config/database');

const db = [];

// dir listar arquivos dentro do diretório
fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .forEach(file => {
        // capturando um arquivo individualmente
        const model = require(path.join(__dirname, file))

        // db [user] = modelo User 
        db[model.name] = model;
    });

sequelize.sync();

module.exports = { sequelize, ...db }