module.exports = (error, req, res, next) => {
  console.error(err.stack);
  res.status(error.status || 500).render('404', {
    status: error.status || 500,
    message: error.message || 'Internal Server Error',
  });
};
