const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/user";

mongoose.connect(url).then(console.log("DB connected"));

// mongoose
// 1.schema
// 2.model

const loginSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const loginModel = mongoose.model("users", loginSchema);

module.exports = loginModel;
