const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./server/router/authRouter');
const cookieParser  = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',authRouter);

app.listen(5000);