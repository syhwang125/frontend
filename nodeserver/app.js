var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')

db.serialize(function() {
    db.run('CREATE TABLE lorem (info TEXT)') 
    var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

    for (var i=0; i<10; i++) {
        stmt.run('Ipsum ' + i)
    }
    stmt.finalize()

    // db.each('SELECT email from user', function(err, row) {
    //     console.log(row.email)
    db.each('SELECT  info FROM lorem', function (err, row) {
        console.log(row.info)
    })
})
db.close()

app.listen(3000, function() {
    console.log("Hello nodejs web framework, express !!");
});

for (var i=0; i<3; i++) {    //ㅂㅣ동기로 실행됨 
    console.log("end of server code ~~~~~");
}

// express server에 알려줘야 함. 
// static folder, file 선언 
app.use(express.static('public'))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true}))
app.set('view_engine', 'ejs') 

// url routing
app.get('/', function(req, res) {
    // res.send("<h1>hi friend!!</h1>")
    console.log('test')
    res.sendFile(__dirname + "/public/main.html")
})


app.get('/main', function(req, res) {
    // res.send("<h1>hi friend!!</h1>")
    res.sendFile(__dirname + "/public/main.html")
})


app.post('/email_post', function(req, res) {
    // get 으로 오는 경우 req.param('email') 으로 받을 수 있
    // 지만 post 는 받을 수 없음 body-parser   설치 필요 
    console.log(req.body)     //json 형태로 로깅됨  
    console.log(req.body.email)
    // res.send("<h1> welcome!! " + req.body.email + "</h1>")
    // email.ejs 에서 email 값을 찾아서 응답을 한다 
    res.render('email.ejs',{'email' : req.body.email})

})

app.post('/ajax_send_email', function(req, res) {
    console.log(req.body.email);

    var email = req.body.email;
    var responseData = {}; 

    var query = db.each('select name from user where email="' + email + '"', function(err, rows) {
        if(err) throw err;
        if(rows[0]) {
            console.log(rows[0])
            responseData.result = "ok";
            responseData.name = rows[0].name;
        } else {
            console.log('none : ' + rows[0])
            responseData.result = "none";
            responseData.name = "";
        }
        res.json(responseData)
    })
    // check validation about input value => select DB 
    // var responseData = {'reult':'ok', 'email':req.body.email}
    // res.json(responseData)
})