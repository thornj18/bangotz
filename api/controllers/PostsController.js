/**
* UserController
*
* @description :: Server-side logic for managing Ad posts
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
  getPost : function(req, res){
    var access_token = req.session.user.access_token;
    var request = require('request');
    var headers = {
      'User-Agent': 'Super Agent/0.0.1',
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    var options = {
      url:'https://api.instagram.com/v1/users/self/media/recent/?access_token='+access_token,
      method: 'GET',
      headers: headers
    };

    request(options, function (error, response, body) {

      if (!error) {

        var jsonBody = JSON.parse(body);

        var fet = jsonBody.data;

        var dot = new Array();


        fet.forEach(function(record){
            record.tags.forEach(function(tag){
              if(tag==="gloat"){
                dot = record;
              }
            });

        });

        res.send(dot);

      }
    });

  }
}
