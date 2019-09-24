const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) =>{
    const { authorization }  = req.headers;
    const token = authorization && authorization.split(" ")[1];
    if(!token){
        res.send({error : 'Authentication failed.'});        
    }
    try{
    jwt.verify(token,"elasu");
    }catch(e){
      res.status(401);
      res.send({error : 'JWT token expired.'});        
    }
    const payload = jwt.decode(token,'elasu');
    const { username } = payload;
   req.headers.username = username;
    next();
}

module.exports = { verifyToken }