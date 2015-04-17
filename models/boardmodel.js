/**
 * Created by ProgrammingPearls on 15. 4. 17..
 */

var mongoose = require('mongoose');
// MYSQL의 DATE_FORMAT (similar DATE_FORMAT of MYSQL)
//var FormatDate = mongoose.Schema.Types.FormatDate = require('mongoose-schema-formatdate');

//var autoinc = require('mongoose-id-autoinc');

// DB Modeling
var BoardSchema = new mongoose.Schema({
  "title" : String,
  "content" : String,
  "passwd" : String,
  "regdate" : {
    "type" : Date,
    "default" : Date.now()
  },
  "hit" : {
    "type" : Number,
    "default" : 0
  },
  "id" : String
});

// https://github.com/mariodu/mongoose-id-autoinc 참조
//BoardSchema.plugin(autoinc.plugin, {
//  "model" : "Board",
//  "field" : "num",
//  "start" : 1,
//  "step" : 1
//});

var Board = mongoose.model('Board', BoardSchema);
