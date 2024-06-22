/** @format */

const express = require("express");
const userRoutes = require("./routes/users.routes");
const bookingRoutes = require("./routes/booking.routes");
const mongoose = require("mongoose");

const app = express();

//parsing the data to json if we not convert then user give body param we will get undefined error message
app.use(express.json());
//app.use to attached middle ware

app.use(bookingRoutes);
app.use(userRoutes);
const port = 4000;
app.listen(port, () => {
  console.log("listening on port " + port);
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://syedjack07:Syedali123@cluster0.coytp2r.mongodb.net/"
  );
  console.log("mongodb connection established");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
