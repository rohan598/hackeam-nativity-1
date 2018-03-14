/////// Including packages
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var geocoder = require('geocoder');

/////// Including models
var society = require('./models/society');
var event = require('./models/event');

/////// Including routes
var appRoutes = require('./routes/app');
// var newRoutes = require('./routes/new');
var registerRoutes = require('./routes/register');
var showRoutes = require('./routes/show');
// var editRoutes = require('./routes/edit');
// var updateRoutes = require('./routes/update');
var authRoutes = require('./routes/auth');

/////// Mongoose setup
mongoose.connect("mongodb://localhost/nativityDB");
mongoose.connection.once('open',()=>{
  console.log('connection estblished');
}).on('error',error=>console.log(error));

/////// setting up app middleware
var app = express();

/////// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/////// to avois cors error
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

/////// Connecting routes to static HTML
app.use('/auth',authRoutes);
app.use('/register',registerRoutes);
app.use('/show',showRoutes);
// app.use('/edit',editRoutes);
// app.use('/update',updateRoutes);
// app.use('/delete',deleteRoutes);
app.use('/webpage',express.static('Webpage'));
app.use('/', appRoutes);

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
            // geocoder.geocode(eventData.address, (e,add)=>{
            //   eventData['lat']=add.results.geometry.lat;
            //   eventData['lng']=add.results.geometry.lng;
              res.send(eventData);
            });
    }).sort({_id:-1}).limit(1);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
