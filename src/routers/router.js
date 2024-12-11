const { Router } = require('express');

const router = Router();

const clienteRoutes = require('./cliente/clienteRotas');

// router.get('/', administradorRoutes);

router.use('/cliente', clienteRoutes);



module.exports = router;