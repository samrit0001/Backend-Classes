const express = require("express")
const app = express();

app.get('/health-checkup',function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;

    const kidneyId =req.query.kidneyId;

    if(!(username == "amrit" ||  password == "pass")){
         res.status(400).json({"msg" : "wrong inputs"}) 
         return;
    }
    if (kidneyId !=1 && kidneyId !=2) {
        res.status(400).json({ "msg": "wrong inputs of kidney" })
    }

    res.json({
        msg : "kidney balle balle"
    })
})

app.listen(3000);