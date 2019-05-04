
const express = require('express');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
function usersList(req, res, next) {
  res.send('respond with a resource');
}

/* GET users listing. */
router.get('/', usersList);

module.exports = router;
