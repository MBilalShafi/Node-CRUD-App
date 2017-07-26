const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is reqd"]
  },
  age: {
    type: String
  },
  gender: {
    type: String
  },
  score: {
    type: String
  }
});

const User = mongoose.model('user', UsersSchema);

module.exports=User;
