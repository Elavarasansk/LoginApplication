const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middleware/auth-check');
const { registerUser , doLogin } = require('../service/userService');

router.post('/register',async(req,res)=>{
	const data = await registerUser(req.body);
      res.send({ data : data });
  });

  
router.post('/login',async(req,res)=>{
const username = await doLogin(req.body);
const token = jwt.sign({username : username},'elasu',{ expiresIn : "5m" });
res.cookie('access_token' , token,
//{maxAge : 6000000}
);
res.send({token : token})
});

router.get('/profile',verifyToken,(req,res)=>{
  const result = 'Welcome to profile..'.concat(req.headers.username);
res.send(result);
});


module.exports = router;