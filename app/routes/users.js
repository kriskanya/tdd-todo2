'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.new = (req, res)=>{
  res.render('users/new', {title: 'Register Page'});
};

exports.create = (req, res)=>{
  User.register(req.body, user=>{
    res.render('users/index', {user:user});
  });
};
