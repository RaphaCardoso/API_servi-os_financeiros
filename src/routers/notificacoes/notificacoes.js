const { Router } = require('express');
const notificacaoController = require('../../controllers/notificacaoController');

const router = Router();

router.post('/', notificacaoController.create);

router.get("/", notificacaoController.getAll);

router.get("/:id", notificacaoController.getOne);

router.put("/:id", notificacaoController.update);

router.delete("/:id", notificacaoController.delete);


module.exports = router;