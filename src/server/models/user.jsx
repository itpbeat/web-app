const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, default: '' },
  password: { type: String }
});

userSchema.methods.verifyPassword = function verifyPassword(password) {
  console.log(this.password);
  console.log(password);
  if(this.password.localeCompare(password) === 0) {
    console.log("match");
    return true;
  } else {
    console.log("mismatch");
    return false;
  }
}

module.exports = mongoose.model('User', userSchema);
