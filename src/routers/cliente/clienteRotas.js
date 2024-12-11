const { Router } = require('express');
const clienteController = require('../../controllers/clienteController');

const router = Router();

router.post('/', clienteController.create);



module.exports = router;