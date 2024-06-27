// npm init -y
// npm install express
// npm install body-parser

// we are creating a user then writing routes to update the kidney for him
// we will be using in-memory and not any database
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());  // app.use(express.json());

var users = [{
    name : 'hehe',
    kidneys :[{
        healthy: false
    },{
        healthy: true    
    }]
}]

app.get('/',function(req,res){
    var hehekidneys = users[0].kidneys;
    var numberofkidneys=hehekidneys.length;
    var numofhealthykidneys = 0;
    for(let i=0;i<numberofkidneys;i++){
        if(hehekidneys[i].healthy==true){
            numofhealthykidneys=numofhealthykidneys+1;
        }
    }
    var numofunhealthy = numberofkidneys - numofhealthykidneys;
    res.json({
        numberofkidneys,
        numofhealthykidneys,
        numofunhealthy
    })
})
// in post request we send data in the body
app.post('/',function(req,res){
    const healthy_or_unhealthy = req.body.healthy_or_unhealthy;
    users[0].kidneys.push({
        healthy : healthy_or_unhealthy
    })
    res.json({
        msg : "Done!"
    })
})

app.put('/',function(req,res){
    const hehekidneys = users[0].kidneys;
    var numberofkidneys = hehekidneys.length;
    for(let i=0;i<numberofkidneys;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({
        msg: 'all healthy now'
    })
    
})

app.delete('/',function(req,res){
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy == true){
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({
        msg : "deleted bad kidneys"
    })
})


app.listen(3000, ()=>{
    console.log("yo listening on port 3000");
})

