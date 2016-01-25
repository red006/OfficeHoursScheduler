var http = require('http');
var fs = require('fs');

//function findUser(){
  //console.log("yes");
//}

http.createServer(function(req, res){
    fs.readFile('./Login.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        });
        var express = require("C://Program Files (x86)//nodejs//node_modules//express");
        var bodyParser =  require("C://Program Files (x86)//nodejs//node_modules//body-parser");
        var app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false}));

app.post('/',function(req, res)
{
var hbox = req.body.hnum;
//console.log(hbox);
res.send(hbox);
});
    //   if (req.method.toLowerCase() == 'post')
      //  {
        //  console.log("worked");
          //var hbox = req.body.hnum;
          //var hnumber = hbox.value;
          //console.log(hnum);
      //  }
      //  app.post('/', function(req, res) {

  //  res.send('Username: ' + req.body.username);

//});


        //console.log("wtfd");
        //app.use(express.bodyParser());
      //  app.post('/', function(req, res)
      //  {
          //console.log(req.body);
        //  res.send("yes");


        //  var name = textbox.value;
      //    console.log('yes');
    //    });

      //  app.get('/', function (req, res){
        //x.each(function(err,doc){
          //res.send(doc);
        //})

      //  res.send(req.originalUrl);
        //res.send(x);
    //    });
      //  res.end();




}).listen(8000);
