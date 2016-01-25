//Main entry point of application, log in page
var http = require('http');
var path = require('C://Program Files (x86)//nodejs//node_modules//path');
var bodyParser = require("C://Program Files (x86)//nodejs//node_modules//body-parser");
//var cookieParser = require("C://Program Files (x86)//nodejs//node_modules//cookie-parser");
var express = require("C://Program Files (x86)//nodejs//node_modules//express");
var app = express();
var registerPage = express();
var x;
var mongoClient = require('mongodb').MongoClient;
//app.use(cookieParser());
var dirname = "C:/Users/red/Documents/GitHub/OfficeHoursScheduler";


//var indexNode = require('./indexNode.js');
var index = require("./indexNode.js"); //index backend
var registration = require('./register.js');//register page back end


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));




//log in form html
app.get('/', function(req, res)
{
  res.sendFile(path.join(dirname, 'Login.html'));
});

//when the user logs in this function will run
app.post('/',function(req, res)
{
var hbox = req.body.hnum;
var password = req.body.password;
//code to search for given hnumber and password
mongoClient.connect("mongodb://Localhost:27017/testOhs", function(err, db)
{
  if(!err){
    console.log("connected");

    var studentTable = db.collection('students');

    studentTable.find({'HNumber':hbox, 'Password':password}).toArray(function(err, documents) {

            if (documents.length > 0)
            {
              console.log(hbox + " found, logging in");
              db.close();
              res.redirect('/index');

            }
            else {
              console.log("Invalid username or password");
                db.close();
            }
          });
        }
      });
});

//main page
//app.get('/index', function(req,res)
//{
  //res.sendFile(path.join(dirname, 'Index.html'));
//  var print = require("./indexNode.js");
  //var printer = new print();
  //printer.printworks();

//});

app.use('/register', registration);//registration page
app.use('/index', index);//main page
//app.post('/register', function(req,res)
//{
  //res.sendFile(path.join(dirname, 'register.html'));
//  var registerFunc = require("./register.js");
  //var reg = new registration();
//res.redirect('/login');

  //reg.register();
//});



//registerPage.post('/', function(req,res)
//{
  //  res.sendFile(path.join(dirname, 'register.html'));
    //var reg = new registration();




//});



//registerPage.get('/', function(req,res)
//{
//  res.sendFile(path.join(dirname, 'Index.html'));
//  var print = require("./indexNode.js");
  //var printer = new print();
//  printer.printworks();
//res.send("no");
//});



app.listen(3000, function () {
console.log('app listening on port 3000!');

});
