/**
 * Created by ProgrammingPearls on 15. 4. 17..
 */
var express = require('express');
var router = express.Router();
var db = require('../models/db');
require('../models/boardmodel');
var BoardModel = db.model('Board');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('board', { title: 'Mongo Board' });
});

router.get('/write', function (req, res, next) {
  res.render('board/writeform', { "title" : "글쓰기"});
});

router.post('/write', function (req, res, next) {
  var title = req.body.title;
  var content = req.body.content;
  var passwd = req.body.passwd;
  var board = new BoardModel({
    "title" : title,
    "content" : content,
    "passwd" : passwd,
    "id" : 'hong'
  });

  board.save(function (err, doc) {
    if (err) console.error('err', err);
    console.log("doc", doc);
    res.json({"result" : "aaa"});
  });

});

router.get('/list', function (req, res, next) {
  //res.render('board/list', { "title" : "리스트" , "data" : });
  res.json({"result" : "ok"});
});
module.exports = router;
