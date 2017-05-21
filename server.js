var express  = require('express');
var app      = express();
require('dotenv').load();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var morgan = require('morgan');             
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override');
var expressValidator = require('express-validator');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var config = require('./backend/config/appConfig');
var authConfig = require('./backend/auth/authConfig');
var socketConfig = require('./backend/auth/socketConfig');
var socketApi = require('./backend/api/socketio/client');
var responseMw = require('./backend/config/responseMiddleware');

authConfig(passport);
socketConfig(io);
socketApi(io);

mongoose.connect(config.connectionStrings.local);

//sample korisnik, ovo maknit kasnije
var uq = require('./backend/queries/userQueries');
var jdid;
uq.addNew("Test User", "123", 2, ["Alpinist", "Doktor"], "Split")
uq.addNew("Josip Dujić", "1234", 2, ["Alpinist", "Programer"], "Zadar").then(data => jdid = data._id)
uq.addNew("Ivan Medić", "12345", 2, ["Doktor", "Alpinist"], "Split")
uq.addNew("Diana Šperanda", "123567", 2, ["Programer"], "Zagreb")

app.use(express.static(__dirname + '/frontend'));
app.use("/uploads", express.static(__dirname + '/uploads'));                
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());
responseMw(app, io);

http.listen(config.port, function(){
  console.log("listening on", config.port)
});

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use('/api/auth', require('./backend/api/authApi'));
app.use('/api/home', require('./backend/api/home'));
app.use('/api/user', require('./backend/api/user'));
app.use('/api/action', require('./backend/api/action'));
app.use('/api/group', require('./backend/api/group'));
app.use('/', require('./backend/config/routes'));

app.use(function(err, req, res, next) {
    console.log("***********");
    console.log("OOPS: ", err);
    console.log("***********")
    res.status(err.status || 500);
    if(config.enableLogging){
      Raven.captureException(err);
    }
    res.json({
        errors: err
    });
});

module.exports = app;
