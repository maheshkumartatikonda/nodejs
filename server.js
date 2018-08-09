var express = require('express')
var app = express()
var bodyparser= require('body-parser')


app.use(express.static(__dirname))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Jane', message: 'Hello'} 
]

app.get('/messages', (req, res) =>{
    res.send(messages)
})

app.post('/messages', (req, res) =>{
    messages.push(req.body)
    console.log(req.body);
    res.sendStatus(200)
})


var server = app.listen(3000, "mahesh-surface" , () => {
    console.log('server is listening on host and  port and web dir:-', server.address().address, server.address().port, __dirname)
})