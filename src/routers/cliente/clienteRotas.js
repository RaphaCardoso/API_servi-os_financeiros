const { Router } = require('express');
const clienteController = require('../../controllers/clienteController');

const { validateUser, validateUserId } = require('../../middlewares/validateAccess');

const router = Router();

router.post('/criar/', validateUser, clienteController.create);

router.get('/buscar/', clienteController.getOne);

router.get('/buscar/:id', clienteController.getAll);

router.put('/atualizar/:id', validateUserId, validateUser, clienteController.update);

router.delete('/deletar/:id', validateUserId, clienteController.delete);

router.post('/login/', validateUser, clienteController.login);

module.exports = router;