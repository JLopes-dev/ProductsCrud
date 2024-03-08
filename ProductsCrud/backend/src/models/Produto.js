const { Schema, model } = require('mongoose');

const produtoSchema = new Schema({
  nome: {
    type: String,
    required: [true, 'O campo nome é obrigatório'],
  },
  preco: {
    type: Number,
    required: [true, 'O campo preço é obrigatório'],
  },
  quantidade: {
    type: Number,
    required: [true, 'O campo quantidade é obrigatório'],
  },
});

const Produto = model('produtos', produtoSchema);

module.exports = Produto;
