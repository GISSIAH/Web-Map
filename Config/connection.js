
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testa1', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.once('open', function() {
  console.log('connection succesfully');
});

module.exports = db;