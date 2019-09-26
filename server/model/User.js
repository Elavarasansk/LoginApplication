const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username : String, 
	password : String
});

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;