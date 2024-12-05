require('dotenv').config();
const express = require('express');
const {sequelize} = require('models');
const router = require('./routers/router');


const app = express();

app.use("/", router);
