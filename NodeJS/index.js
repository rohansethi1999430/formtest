const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var multer = require('multer');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./Images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({
    storage: Storage
}).array("imgUploader", 3); //Field name and max count
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);