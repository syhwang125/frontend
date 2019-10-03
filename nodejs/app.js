var express = require('express') 
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function() {
    console.log("start!! express server on ort 3000");
});


app.use(express.static('public'))
//app.use(express.static('image'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extennded:true}))

console.log('end of server code!!!');

app.get('/', function(req, res) {
 //   res.send("<h1>hi, my friend!!</h1>")
 console.log(__dirname)
    res.sendFile(__dirname + "/public/index.html")
})    // http://localhost:3000/

app.get('/main',function(req,res) {
    res.sendFile(__dirname + '/public/index.html')
});    // http://localhost:3000/main 

app.post('/email_post', function(req, res) {
    console.log(req.body.email)
    console.log(req.body.name)
  //  res.send("post resonse")
  res.send("<h1>welcome " + req.body.email + "</h1>")
});    // http://localhost:3000/form.html