const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    phone: { type: Number },
    
});

module.exports = { Employee };