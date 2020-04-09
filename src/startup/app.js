const express = require('express');
const morgan = require('morgan');
const path = require('path');

const routes = require('../routes/router');
const error = require('../utility/error');

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('tiny'));
  app.set('view engine', 'ejs');
  app.set('views', path.join('views'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/', routes);
  app.use(error);
  app.use((req, res, next) => {
    res.status(404).render('404', {
      status: 404,
      message: `            OOPS!!!
                   This page cannot be found`,
    });
  });
};
