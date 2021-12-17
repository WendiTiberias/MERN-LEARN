const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb://127.0.0.1:27017/people", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const user = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  noHp: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  income: {
    type: Number,
    required: true,
  },

  expense: {
    type: Number,
    required: true,
  },
});

const Users = mongoose.model("user", user);

module.exports = Users;
