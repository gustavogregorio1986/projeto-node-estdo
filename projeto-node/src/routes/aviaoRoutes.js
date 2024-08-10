const express = require('express');
const router = express.Router();
const aviaoController = require('../controllers/aviaoController');

router.post('/avioes/create', aviaoController.createAviao);
router.get('/avioes/listarAvioes', aviaoController.listarAvioes);


module.exports = router;