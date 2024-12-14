const { Router } = require('express');
const clienteController = require('../../controllers/clienteController');

const router = Router();

router.post('/', clienteController.create);

router.get("/", clienteController.getAll);

router.get("/:id", clienteController.getOne);

router.put("/:id", clienteController.update);

router.delete("/:id", clienteController.delete);


module.exports = router;