const express = require('express');
const { bookSeat, getAllSeats } = require('../controllers/seatController');
const route = express.Router();

// booking seat route
route.post('/seat', bookSeat);

// get all seats route
route.get('/getAllSeats', getAllSeats);

// export route
module.exports = route


