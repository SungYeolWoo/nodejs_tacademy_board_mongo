/**
 * Created by ProgrammingPearls on 15. 4. 17..
 */

var mongoose = require('mongoose');
var uri = 'mongodb://localhost/test';
var options = {
  "server" : {
    "poolSize" : 100
  }
};

var db = mongoose.createConnection(uri, options);

// 자동 증가 모듈 (autoincreament module)
var autoinc = require('mongoose-id-autoinc');
autoinc.init(db); // 초기화 (initialize)

// 에러시 발생하는 이벤트 (emmit error)
db.on('error', function (err) {
  if(err) console.error('db err', err);

});

// 한번만 발생하는 이벤트 (emmit once)
db.once('open', function callback() {
  console.info('Mongo connected successfully');
});

module.exports = db;