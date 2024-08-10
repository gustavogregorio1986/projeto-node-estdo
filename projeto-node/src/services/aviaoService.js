const Aviao = require('../models/aviao');

async function createAviao(data) {
    return await Aviao.create(data);
}

async function listarAvioes() {
    return await Aviao.findAll();
}

module.exports = {
    createAviao,
    listarAvioes
}