var http = require('http');
var path = require('C://Program Files (x86)//nodejs//node_modules//path');
var bodyParser = require("C://Program Files (x86)//nodejs//node_modules//body-parser");
//var cookieParser = require("C://Program Files (x86)//nodejs//node_modules//cookie-parser");
var express = require("C://Program Files (x86)//nodejs//node_modules//express");
var app = express();
var x;
var mongoClient = require('mongodb').MongoClient;

var tid = ""; // id of teacher selected
var dirname = "C:/Users/red/Documents/GitHub/OfficeHoursScheduler";

var indexRouter = express.Router();

indexRouter.get('/', function(req, res, next)
{
res.sendFile(path.join(dirname, 'IndexNew.html'));
});//Get

indexRouter.post('/', function(req, res, next)
{
//res.sendFile(path.join(dirname, 'register.html'));
});//post


module.exports = indexRouter;
