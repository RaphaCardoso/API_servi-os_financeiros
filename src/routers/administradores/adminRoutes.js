const { Router } = require('express');
const adminController = require('../../controllers/adminController');

const router = Router();

router.post('/', adminController.create);

router.get("/", adminController.getAll);

router.get("/:id", adminController.getOne);

router.put("/:id", adminController.update);

router.delete("/:id", adminController.delete);


module.exports = router;