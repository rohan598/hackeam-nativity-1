var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var society = require('./models/society');
var event = require('./models/event');
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
var societyRoutes = require('./routes/society').router;

var signinRoutes = require('./routes/signin');

var app = express();

mongoose.connect("mongodb://localhost/nativityDB");
mongoose.connection.once('open',()=>{
  console.log('connection estblished');
}).on('error',error=>console.log(error));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/signin',signinRoutes);
app.use('/user',userRoutes);
app.use('/society',societyRoutes);
app.use('/webpage',express.static('Webpage'));
app.use('/', appRoutes);

// let id = require('./routes/society').id;
var eventData= {};
app.use('/getdata', (req,res)=>{
    //getting data about society
  event.find((err,d)=>{
        if(err) throw err;
        console.log("data using id :-");
        console.log(d[0]);
        eventData = d[0];
        const sid = eventData.id;
        society.findById(sid,(err,d2)=>{
            if(err) throw err;
            console.log("data using id :-");
            console.log(d2);
            eventData['logo']=d2.logo;
            eventData['societyname']=d2.name;
            res.send(eventData);
          });
    }).sort({_id:-1}).limit(1);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
