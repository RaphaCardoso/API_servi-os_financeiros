require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const router = require('./routers/router');


const app = express();

app.use(express.json());

app.use("/", router);

sequelize.authenticate().then(async () => {
    console.log("Conexão com o banco de dados deu certo!");
    await sequelize.sync()
}).catch(err => {
    console.error("Erro ao conectar ao banco: ", err);
});

const PORT = process.env.PORT || 3110;

app.listen(PORT, () => {
    console.log('----------------------------');
    console.log(`Running on http://${PORT}`);
    console.log('----------------------------');
});
