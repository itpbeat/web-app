const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, default: '' },
  password: { type: String }
});

userSchema.pre('save', function checkPassword(next) { // eslint-disable-line consistent-return
  const user = this;
  bcrypt.hash(user.password, null, null, (innerErr, hash) => {
    if (innerErr) { return next(innerErr); }
    user.password = hash;
    return next();
  });
});

userSchema.methods.verifyPassword = function verifyPassword(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
