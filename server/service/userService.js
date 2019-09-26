const  UserModel  = require('../model/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = async(body) =>{
const { username , password } = body;
const hash = await bcrypt.hash( password , saltRounds);
return await UserModel.create({ username : username , password : hash });
}


const doLogin = async(body) =>{
    const { username , password } = body;
    const user =  await UserModel.findOne({username : username}).exec();
    if(!user){
        throw new Error('User not found.');
    }
    const isValid =  await bcrypt.compare(password,user.password);
    if(!isValid){
        throw new Error('Login failed.');
    }
    return user.username;
}

module.exports = { registerUser , doLogin };