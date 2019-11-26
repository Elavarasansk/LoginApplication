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




Header -- >
		Left -->	
			Logo
		Right -->
			Login Button
Section -->
		Image   	Content
		Content 	Image
Footer -->
		Products
		Contact
		Solution
		Company
		Service & Support
		
	
1 . Login Page Design

2 . Section Design

3 . Footer design

4 . Header design

5 . Component Motion 

6 . Back to Top

7 . Flash for login

---Application---

1 . All component CSS & Style change

2 . Profile Navigation ( App Bar material ui ) 

3 . Like and not like symbol change 



** Final **

All Component should be responsive 

******






