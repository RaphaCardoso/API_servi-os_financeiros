const { Router } = require('express');

const router = Router();

const clienteRoutes = require('./cliente/clienteRotas');

router.use('/cliente', clienteRoutes);



module.exports = router;