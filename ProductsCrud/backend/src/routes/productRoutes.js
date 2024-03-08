const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const router = Router();

module.exports = router
  .post('/produtos', ProductController.criarProduto)
  .get('/produtos', ProductController.mostrarTodos);
