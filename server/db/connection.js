const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/loginApp', {useNewUrlParser: true});
const db = mongoose.connection;

//db.on('error',console.log('DB connection failed.'));
//db.once('open',()=>console.log('DB connected successfully.'));

module.exports = mongoose;

