require('@babel/register');
const express = require('express');
// const dotenv = require('dotenv');
const bodyParser = require('body-parser');
routers = require('./routes/index');

const app = express();
const port = 3005;

//
// middlewares
//

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  // console.log(req.get('User-Agent'));
  next();
});

app.use(routers);

// run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
