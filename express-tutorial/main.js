var express = require('express');
var app = express();

// call routes's user.js 불러와서 사용하기 
var user = require('./routes/user');

// var myLogger = function(req, res, next) {
//     console.log(req.url);
//     next();
// };

// app.use(myLogger);

// logging lib
// var morgan = require('morgan');
// app.use(morgan('dev'));

// json parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req, res) {
    res.send('Hello World');
});

app.use('user',user);

app.use('/', express.static('public'));

/*


app.get('/user/:id',function(req, res) {
    res.send('Received a GET request, param:' + req.params.id);
});

app.post('/user', function(req,res) {
    res.json({sucess:true});
});

app.put('/user', function(req,res) {
    res.status(400).json({message : 'Hey, you. Bad Request!'});
});

app.delete('/user', function(req, res) {
    res.send('Received a DELETE request');
});
*/

app.listen(3000, function() {
    console.log('Example APp is listening on port 3000');
});
