var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  _userId: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  content: String,
  date: { type: Date, default: Date.now },
  score: Number
});

module.exports = mongoose.model('Post', PostSchema);