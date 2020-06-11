const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rohansethi:rs.9897637879@cluster0-odcdc.mongodb.net/employee1?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;