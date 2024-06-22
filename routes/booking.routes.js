/** @format */

const { bookings } = require("../booking");

const express = require("express");

const router = express.Router();

router.get("/bookings", (req, res) => {
  console.log(bookings);
  res.send({
    bookingDetails: bookings,
  });
});

module.exports = router;
