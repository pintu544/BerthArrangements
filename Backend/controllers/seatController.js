const seatModel = require('../models/seats');

const MAX_SEATS = 80;
const MAX_SEATS_IN_Row = 7;

// get all seats
module.exports.getAllSeats = async(req,res) => {
  let allBookedSeat = await getAllSeats();
  return res.status(200).json({
    success: true,
    data: allBookedSeat,
  });
}



// book seat
module.exports.bookSeat = async function bookSeat(req, res) {
  console.log("seates:" ,req.body);

  let noOfSeatsRequired = req.body.noOfSeats;
  let seatsOccupied = await getAllSeats();
  let originalSeatOccupiedInRow = { ...seatsOccupied };
  let seat_found = -1;
  let seatsFill = []; //current Fill
  //seat_found = -1// no seats
  for (let row = 1; row <= 12; row++) {
    console.log('roe', row);
    if (seat_found == 1) {
      break;
    }
    let seatOccupiedInRow = seatsOccupied[row].length;
    let startSeat = (row - 1) * 7 + 1;
    let leftSeats =
      Math.min(MAX_SEATS, startSeat + 6) - startSeat + 1 - seatOccupiedInRow;
    if (row == 8) {
      console.log('leftSeat', leftSeats);
    }
    if (leftSeats >= noOfSeatsRequired) {
      for (let j = startSeat; j <= Math.min(MAX_SEATS, startSeat + 6); j++) {
        if (noOfSeatsRequired == 0) {
          break;
        }
        if (!seatsOccupied[row].includes(j)) {
          let temp = {
            seat: j,
            seatsRow: row,
          };
          seatsOccupied[row].push(j);
          seatsFill.push(temp);
          noOfSeatsRequired--;
        }
      }
    }
    if (noOfSeatsRequired == 0) {
      for (let i = 0; i < seatsFill.length; i++) {
        let { seat, seatsRow } = seatsFill[i];
        console.log('b', seat, seatsRow);
        await insertSeat(seat, seatsRow);
      }
      seat_found = 1;
    }
  }
  //start with first row fill what you can found
  if (seat_found != 1) {
    for (let row = 1; row <= 12; row++) {
      if (noOfSeatsRequired == 0) {
        break;
      }
      let seatOccupiedInRow = seatsOccupied[row].length;
      let startSeat = (row - 1) * 7 + 1;
      for (let j = startSeat; j <= Math.min(MAX_SEATS, startSeat + 6); j++) {
        if (noOfSeatsRequired == 0) {
          break;
        }
        if (!seatsOccupied[row].includes(j)) {
          let temp = {
            seat: j,
            seatsRow: row,
          };
          seatsOccupied[row].push(j);
          seatsFill.push(temp);
          noOfSeatsRequired--;
        }
      }

      if (noOfSeatsRequired == 0) {
        for (let i = 0; i < seatsFill.length; i++) {
          let { seat, seatsRow } = seatsFill[i];
          console.log('b', seat, seatsRow);
          await insertSeat(seat, seatsRow);
        }
        seat_found = 1;
      }
    }
  }
  let seatsBook2 = await getAllSeats();
  return res.status(200).json({
    success: true,
    data: seatsBook2,
  });
};

async function getAllSeats() {
  let seatsArray = await seatModel.find({});
  let resp = {};
  for (let i = 1; i <= 12; i++) {
    resp[i] = [];
  }
  for (let i = 0; i < seatsArray.length; i++) {
    let temp = seatsArray[i];
    let seatsRow = temp['seatsRow'];
    resp[seatsRow].push(temp['seat']);
  }

  console.log('a', resp);
  return resp;
}

async function insertSeat(seat, seatsRow) {
  await seatModel.create({
    seat: parseInt(seat),
    seatsRow: parseInt(seatsRow),
  });
}
