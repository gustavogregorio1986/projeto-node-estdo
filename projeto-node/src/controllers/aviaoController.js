const aviaoService = require('../services/aviaoService');

const createAviao = async (req, res) => {
  try {
    const { nomeCompanhia, marca, tempoRodado } = req.body;
    const novoAviao = await aviaoService.createAviao({ nomeCompanhia, marca, tempoRodado });
    res.status(201).json(novoAviao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar avião' });
  }
};

const listarAvioes = async (req, res) => {
  try {
    const avioes = await aviaoService.listarAvioes();
    res.status(200).json(avioes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar aviões' });
  }
};

module.exports = {
  createAviao,
  listarAvioes,
};
