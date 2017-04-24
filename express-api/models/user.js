var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  password: String,
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }] 
});

module.exports = mongoose.model('User', UserSchema);