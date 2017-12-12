var express = require('express');
var router = express.Router();
var userValidation = require('../lib/validations/user-validation.js')

var users = [];

router.get('/', function(req, res, next) {
    res.render('user-summary', { users: users });
});


// Get show all users
router.get('/show', function(req, res, next) {
  res.send(users);
});


// Post new user
router.post('/new', function(req,res){

	if(userValidation(req.body.password,req.body.confirmPassword)){
		console.log(req.body)
		users.push(req.body);
		console.log(users)
		res.redirect("/users");
	}else{
		res.render('index', { title: 'Smash Tech', passwordValid: false });
	}
	
});

module.exports = router;

