var express = require('express');
var router = express.Router();
var controller = require('../controller/users.controller');

  router.get('/', controller.index);

  router.get('/search', controller.search);

  router.get('/create', controller.create);
  router.get('/login', controller.login);

  
  router.get('/:id', controller.getId);


  router.post('/create', controller.postCreate)


module.exports = router;