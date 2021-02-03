//usar express
const express = require("express");
const app = express();
const port = 8000;

//usar sesiones
const session = require('express-session');
app.use(session({secret: 'miclave'})); 

//usar carpet static
app.use(express.static(__dirname + "/static"));

//usar vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//usar sesiones
app.get('/', function (req, res){

  if(req.session.count==undefined){
    req.session.count=0;
  };

   req.session.count++;
  
  return res.render('contador',{count:req.session.count});
  
});

app.get('/aumentar', function(req,res){

  req.session.count+=2;
  return res.render('contador',{

    count:req.session.count});
  });

  app.get('/reinicio',function(req,res){
req.session.count=0;
res.redirect('/');

  });




app.listen(port, () => console.log(`Listening on port: ${port}`));
