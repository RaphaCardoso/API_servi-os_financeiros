const { Router } = require('express');
const transacaoController = require('../../controllers/transacaoController');

const router = Router();

router.post('/', transacaoController.create);

router.get("/", transacaoController.getAll);

router.get("/:id", transacaoController.getOne);

router.put("/:id", transacaoController.update);

router.delete("/:id", transacaoController.delete);


module.exports = router;