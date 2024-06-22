/** @format */

const users = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  city: String,
});

const Users = mongoose.model("users", users);
