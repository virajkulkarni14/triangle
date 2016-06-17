var bcrypt     = require('bcrypt-nodejs');
var mongoose   = require('mongoose');
var UserSchema = mongoose.Schema({
  email: {
    type   : String,
    unique : true
  },
  password : String
});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
