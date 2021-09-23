var express = require('express');
var router = express.Router();
var controller = require('../controller/users.controller');
const multer =  require('multer');
var path = require('path')
global.crypto = require('crypto')


var storage = multer.diskStorage({
  destination: './public/image/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

const upload = multer({ storage: storage })

  router.get('/', controller.index);

  router.get('/search', controller.search);

  router.get('/create', controller.create);
  router.get('/login', controller.login);

  
  router.get('/:id', controller.getId);


  router.post('/create',upload.single('avatar'), controller.postCreate)


module.exports = router;