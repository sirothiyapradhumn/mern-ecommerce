const mongooes = require("mongoose");

const userSchema = new mongooes.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongooes.model('User', userSchema);
module.exports = User;