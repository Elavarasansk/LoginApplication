const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/data',(req,res)=>{
    console.log('express called....');
res.send({ data : 'hi elasu react called express..'});
})

app.listen(5000);