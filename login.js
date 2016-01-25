//console.log("worked");
//var express = require("C://Program Files (x86)//nodejs//node_modules//express");
//var cookieParser = require("C://Program Files (x86)//nodejs//node_modules//cookie-parser");
//var app = express();
//app.use(cookieParser());
//var opener = require("C://Program Files (x86)//nodejs//node_modules//opener");
//opener('./login.html');
//function checkLogin()
//{
function findUser()
{
  //var express = require("C://Program Files (x86)//nodejs//node_modules//express");
  //var cookieParser = require("C://Program Files (x86)//nodejs//node_modules//cookie-parser");

var namebox = document.getElementById('hnumbox');
var thename = namebox.value;

document.cookie = "name=" + thename;
//var thecookie = getCookie('name');

//window.location("http://localhost:3000");
var http = new XMLHttpRequest();
http.open("GET","http://localhost:3000",true );
http.send();
//}
}














//    db.close();
