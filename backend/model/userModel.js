const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String, 
  password: String,
});

const UserModel = mongoose.model("User", UserSchema, "Chef");
module.exports = UserModel;
