var mongoose = require('mongoose');
mongoose.connect('mongodb://prelude0390:1233@ds019990.mlab.com:19990/todolist_test');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
  title : String,
  content : String
});

module.exports = mongoose.model('data', dataSchema);
