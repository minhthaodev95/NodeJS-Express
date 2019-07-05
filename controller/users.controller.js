var db = require('../db');
const shortid = require('shortid');

module.exports.index = function(req, res){
    res.render('users/index', {
      users : db.get('users').value()
    })
  };
module.exports.search = function(req, res){
    var q = req.query.qe;
    var usersdb  = db.get('users').value();
    var usersMatched = usersdb.filter(function(user){
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
      users :usersMatched,
      q : q
    })
  };
module.exports.login = function(req, res){
  res.render('users/login')
}
module.exports.create =  function(req, res){
    res.render('create');
  };

module.exports.getId =  function(req, res){
    var users = db.get('users').find({ id : req.params.id }).value();
    res.render('users/view', {
       users : users
     })
  };

module.exports.postCreate =  function(req, res){
    req.body.id  = shortid.generate();
    var errors = [];
    if(!req.body.name) {
      errors.push('Name is required');
    }
    if(!req.body.phone) {
      errors.push('Phone is required');
    }
    if(errors.length){
      res.render('create', {
        errors :errors,
        values: req.body
      });
      console.log(errors);
      return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/users');  
  };
