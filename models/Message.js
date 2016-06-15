var mongoose      = require('mongoose');
var MessageSchema = mongoose.Schema({
  id        : String,
  content   : String,
  user      : Object,
  timestamp : String
});
module.exports    = mongoose.model('Message', MessageSchema);
