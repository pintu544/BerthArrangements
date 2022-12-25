var mongoose = require('mongoose');

var SeatSchema = new mongoose.Schema(
  {
    seat: {
      type: Number,
      required: true,
      unique: true,
    },
    seatsRow: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var seatModel = mongoose.model('seat', SeatSchema);

module.exports = seatModel;
