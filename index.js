const dotenv = require('dotenv');
dotenv.config();
var express = require('express')
let app = express()
const PORT = process.env.PORT || 3000;

let emailRouter = require('./routes/email');
app.use(express.json());
// allow cross origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(emailRouter);
app.listen(PORT, function () {
    console.log(`Listening to Port ${PORT}`);
});


