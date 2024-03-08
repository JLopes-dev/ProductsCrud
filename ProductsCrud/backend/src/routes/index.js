const express = require('express');
const productsRoutes = require('./productRoutes');

module.exports = (app) => {
  app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    productsRoutes,
  );
};
