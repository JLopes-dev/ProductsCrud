const mongoose = require('mongoose');

const tratamentoDeErros = (error, req, res, next) => {
  if (error instanceof mongoose.Error.ValidationError) {
    const errors = Object.values(error.errors).map((e) => e.message);
    res.status(400).json({
      status: 400,
      message: errors,
    });
  } else {
    res.status(500).json({
      status: 500,
      message: 'Error interno do servidor',
    });
  }
};

module.exports = tratamentoDeErros;
