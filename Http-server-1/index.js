// get packages  : npm init -y
// install express : npm install express


const express = require('express');
const port = 3000
const app = express();

app.get('/',function(req,res){
    req=null;
    res.send("hitting the default path")
})

app.get('/htmlreply', function (req, res) {
    req = null;
    res.send('<b>bold text means returning html</b>')
})

app.get('/profile',function(req,res){
    req=null;
    res.json({
        name : "Amrit",
        age : 25
    })
})

app.listen(port)