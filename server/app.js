var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const session = require('express-session')
const {v4:uuidv4} = require('uuid')
const mongoose = require('mongoose')

var userRouter = require('./routes/User/user');
var  adminRouter = require('./routes/Admin/admin');

var app = express();

//mongodb
mongoose.connect('mongodb://localhost:27017/TWO-WHEELER')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//cacheControl
app.use(function(req, res, next) {
  if (!req.user) {
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
      res.header('Expires', '-1');
      res.header('Pragma', 'no-cache');
  }
  next();
});

//session
app.use(session({
  secret : uuidv4(),
  resave : false,
  saveUninitialized : true,
  cookie : {maxAge : 6000000000}
}))


//cors
const corsOptions = {
  origin : "http://localhost:3000",
  credentials : true,
  optioSuccessStatus : 200
}
app.use(cors(corsOptions))


app.use('/user', userRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3001

app.listen(PORT,console.log(`server running on port ${PORT}`))
module.exports = app;
