//npm install body-parser
// npm install nodemon   ,   now start using  npx nodemon index.js
const express =require('express')
const bodyParser =require("body-parser")
const port = 3000
const app =express()

//middlewares
app.use(bodyParser.json());

app.get('/', (req,res) =>{
    req=null;
    res.status(700).send("Hey")
}) 
// express does not handle body it ignores it, so we have to use body-parser
//body parser module enables us to parse incoming request bodies in middleware
//express.js needs to know what type of data you are sending over the network,so it knows how to parse
app.post('/postrequest',(req,res)=>{
    console.log(req.headers)
    console.log("authorization header : ",req.headers["authorization"])
    console.log(req.body);
    res.send({
        msg : "2+2=4"
    })
})
// used postman to send data for post request
app.get('/newroute',function(req,res){
    req=null;
   // res.send("whatsup");  // cant send two at a time 
    res.json({
        name : "Amrit",
        age : 25,
    })
})
// we have to provide query browser like this : http://localhost:3000/sum/?n=5&m=12
app.get('/sum',function(req,res){
    const n = req.query.n;
    const m=req.query.m;
    const ans= n*m;
    res.send(ans.toString());
})

 
app.listen(port ,()=>{
    console.log('Started Listening at port' , port)
    
})