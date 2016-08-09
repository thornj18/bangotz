/**
* UserController
*
* @description :: Server-side logic for managing users
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {

	get : function(req, res){
		if(req.session && req.session.user){
			User.findOne({id:req.session.user.id}).exec(function(err, user){
				if(err) {
					res.send(err);
				}

				if(!user){
					res.send({'message':'Could not find user'})
				}

				res.send(user);
			});
		}else{
			return res.forbidden("You are not permitted to perform this action.");
		}
	},

	getUser : function(req, res){
		var request = require('request');
		var urldata = req.params.all();
		var client_id = "06f18018ae8a460b8b23762b67fc8df4";
		var client_secret = "614c1d6289f241d9b825f1e702fb1f0d";
		var headers = {
			'User-Agent': 'Super Agent/0.0.1',
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		var options = {
			url: 'https://api.instagram.com/oauth/access_token',
			method: 'POST',
			headers: headers,
			form:{
				'client_id':client_id,
				'client_secret':client_secret,
				'grant_type':'authorization_code',
				'redirect_uri':'http://localhost:1337/redirect',
				'code':urldata.code
			}
		};

		request(options, function (error, response, body) {

			if (!error && response.statusCode == 200) {
				var jsonBody = JSON.parse(body);
				var username =  jsonBody.user.username;
				var full_name = jsonBody.user.full_name;
				var profile_picture = jsonBody.user.profile_picture;
				var access_token = jsonBody.access_token;
				var ig_userid = jsonBody.user.id;

				User.findOne({ig_userid:ig_userid}).exec(function(err, user) {
					if(user){
						//check change in access_token & username
						if (user.access_token === access_token) {

						}
						else{
							user.access_token = access_token;
							user.save();
						}
						if(user.username === username){

						}
						else {
							user.username = username;
							user.save;
						}
						req.session.user = user;
						res.send(user);
					}
					else {
						User.create({ig_userid:ig_userid,username:username,full_name:full_name,access_token:access_token}).exec(function createCB(error, created){
							if(!error){


								req.session.user = created;
								res.send(created);
							}else {
								res.send(error);
							}
						});
					}
				});
			}
		});

	}
}

//io.socket.get('/users/9', function (resData) {
//  resData; // => {id:9, name: 'Timmy Mendez'}
// });
