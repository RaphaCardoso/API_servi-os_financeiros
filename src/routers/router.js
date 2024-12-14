const { Router } = require('express');

const router = Router();

const clienteRoutes = require('./cliente/clienteRoutes');

const adminRoutes = require('./administradores/adminRoutes');

const contaRoutes = require('./contas/contaRoutes');

const notificacoesRoutes = require('./notificacoes/notificacoes');

const transacaoRoutes = require('./transacao/transacaoRoutes');

router.use('/cliente', clienteRoutes);
router.use('/admin', adminRoutes);
router.use('/conta', contaRoutes);
router.use('/notificacao', notificacoesRoutes);
router.use('/transacao', transacaoRoutes);




module.exports = router;