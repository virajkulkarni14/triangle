var mongoose   = require('mongoose');
var UserSchema = mongoose.Schema({
  email: {
    type   : String,
    unique : true
  },
  password : String
});

