const express = require('express');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
function root(req, res, next) {
  res.render('index', { title: 'Express' });
}

router.get('/', root);

module.exports = router;
