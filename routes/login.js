'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  //res.render('login', { user: req.user });
  const from = req.query.from;
  if (from) {
    res.cookie('loginFrom', from, { expires: new Date(Date.now() + 600000)});
  }
  res.render('login');  
});

module.exports = router;