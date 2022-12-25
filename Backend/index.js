const express = require('express')
const port = 5000
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/mongoose')
const cors = require('cors');
const seatRoutes = require('./routes/seatRoutes')

// cors (secure cross-origin requests)
var corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions));


// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// user route
app.use('/', seatRoutes)
// blog article route

// app.get('/', (req,res) => {
//     return res.json({message: "My blog App!!!"})
// })


// listen our server on my port address
app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});