const Produto = require('../models/Produto');

class ProductController {
  static criarProduto = async (req, res, next) => {
    const { nome, preco, quantidade } = req.body;
    try {
      const produtoCriado = await Produto.create({ nome, preco, quantidade });
      res.status(201).json({
        status: 201,
        message: produtoCriado,
      });
    } catch (error) {
      next(error);
    }
  };

  static mostrarTodos = async (req, res, next) => {
    try {
      const todosProdutos = await Produto.find({});
      res.status(200).json({
        status: 200,
        message: todosProdutos,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = ProductController;
