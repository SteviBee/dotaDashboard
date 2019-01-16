var async = require('async');
var request = require('request');

// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

// exports.index = function(req, res, next) {
//   res.render('index', { title: 'Dota Dashboard', api: 'test1' });
// };

// // Good code here:
// request(url, { json: true }, function(err, res, body) {
// if(err) { return console.log(err); }
// console.log(body.duration);

exports.index = function(req, res, next) {
  // var url = 'https://api.opendota.com/api/players/76561198343767608/';
  var url = 'https://api.opendota.com/api/matches/4318796964/';
  // var url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  // url = JSON.parse(url);
  var results = 'after request module - FIRST';
  // console.log(req.is);

  request(url, { json: true }, function(err, res, body) {
    if(err) { return console.log(err); }
    console.log(body.duration); // THIRD
    console.log('statusCode:', res && res.statusCode);

    results = "test is that!"; //FOURTH
    console.log(results); // HERE
    return results;
    next()

  });

  console.log(results);
  // console.log(req);
  results = "test post REQ ----------------------------- SECOND";
  console.log(results);
  // console.log(res);
  res.render('index', { title: 'Dota Dashboard', results: results });
  // res.json([results]);
  // JSON.stringify(results)

};

//   request(url, function(err, res, body) {
//     wow = body;
//     console.log(wow);
//   });
// };

//   res.render('index', { title: 'Dota Dashboard', api: 'test1' });
// };


  // var player_id = req.param('')
  // var url = 'https://api.opendota.com/api/players/76561198343767608/';

  //Back to basics below:


// TESTING how to use post.
exports.post = function(req, res, next) {
  res.render('index', { title: 'Dota Dashboard', api: 'POST!!' });
}
