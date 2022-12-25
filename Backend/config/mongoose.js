const mongoose = require('mongoose');
const mongoAtlasUri =
  "mongodb+srv://pintu870:LIL709VUQY0S1yhm@cluster0.inxx8yi.mongodb.net/test";

mongoose.connect(
mongoAtlasUri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connection on mongodb'));

db.once('open', function () {
    console.log('Connected to database :: MongoDB');
});

module.exports = db;