const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');



router.get('/auth',(req,res)=>{
console.log('router method called..');
res.send('done..');
});

router.post('/login',(req,res)=>{
const { username , password } = req.body;
const token = jwt.sign({username : username},'elasu',{ expiresIn : "5m" });
res.cookie('access_token' , token,
    {maxAge : 600000});
res.send({token : token})
});

router.post('/verify',(req,res)=>{
    const { access_token } = req.cookies;
    console.log('access_token...',access_token);
    try{
    jwt.verify(access_token,"elasu");
    }catch(e){
      res.status(401);
      res.send({error : 'JWT token expired.'});        
    }
    const payload = jwt.decode(access_token,'elasu');
    res.send({data : payload})
    });


module.exports = router;