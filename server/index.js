'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = 4000;

const {
  getSingleProduct,
  updateStock,
} = require('./handlers.js');

express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // REST endpoints?
  .get('/bacon', (req, res) => res.status(200).json('🥓'))

  // get all products endpoint

  // get a single product
  .get('/product/:id', getSingleProduct)

  // update stock of products
  .put('/order',updateStock)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
