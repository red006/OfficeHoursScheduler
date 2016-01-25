var http = require('http');
var path = require('C://Program Files (x86)//nodejs//node_modules//path');
var bodyParser = require("C://Program Files (x86)//nodejs//node_modules//body-parser");
//var cookieParser = require("C://Program Files (x86)//nodejs//node_modules//cookie-parser");
var express = require("C://Program Files (x86)//nodejs//node_modules//express");
//var app = express();
var x;
var mongoClient = require('mongodb').MongoClient;

var tid = ""; // id of teacher selected
var dirname = "C:/Users/red/Documents/GitHub/OfficeHoursScheduler";



//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false}));

//var registration = function ()
//{
  //var self = this;
  //self.register = function()
  //{
    //console.log("Registration page open");
  //};
//};

var regRouter = express.Router();
regRouter.get('/', function(req, res, next)
{
res.sendFile(path.join(dirname, 'register.html'));
});//Get


//insert into DB
regRouter.post('/', function(req, res, next)
{

  var hnum = req.body.hnum;
  var firstName = req.body.FirstName;
  var lastName = req.body.LastName;
  var email = req.body.Email;
  var password = req.body.Password;
  mongoClient.connect("mongodb://Localhost:27017/testOhs", function(err, db)
  {
    if(!err){
      console.log("connected");

      var studentTable = db.collection('students');

      studentTable.insert({'HNumber':hnum, 'Password':password, 'FirstName':firstName, 'LastName':lastName, 'Password':password });
        console.log(firstName + " " + lastName + " Successfully Registered");

        db.close();

        //res.redirect('../');
      res.redirect('/register/addTeachers');
          }
        });
  });//Post

   regRouter.get('/addTeachers', function(req, res, next)
   {
   res.sendFile(path.join(dirname, 'editTeachers.html'));
   var list = req.body.cars;
  
  // button.setAttribute('type', 'button');
  // button.setAttribute('name','testbutton');
  // button.setAttribute('value','the button');
  // var list = req.body.list;
  // list.appendChild(button);
   });//Get


//module.exports = registration();
module.exports = regRouter;
