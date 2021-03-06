var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', function(req,res){
    res.render('index');
})

app.post('/results', function(req, res){
    res.render('results', {user:req.body})
})

app.listen(8000,function(){
    console.log('listening on port 8000');
});
