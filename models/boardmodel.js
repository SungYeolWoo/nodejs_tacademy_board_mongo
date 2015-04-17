/**
 * Created by ProgrammingPearls on 15. 4. 17..
 */

var mongoose = require('mongoose');
// MYSQL의 DATE_FORMAT (similar DATE_FORMAT of MYSQL)
var FormatDate = require('mongoose-schema-formatdate');
var autoinc = require('mongoose-id-autoinc');

// DB Modeling
var boardSchema = new mongoose.Schema({
  "title" : String,
  "content" : String,
  "passwd" : String,
  "regdate" : {
    "type" : FormatDate,
    "format" : "YYYY-MM-DD HH:mm:ss",
    "default" : Date.now()
  },
  "hit" : {
    "type" : Number,
    "default" : 0
  },
  "id" : String
});