var express = require("express");
var app=express();

var bodyparser= require("body-parser");

app.use(express.json());
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb',extended:true}));
app.use(express.static("assets"));

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Method", "POST,GET,PUT,PATCH,DELETE");
        return res.status(200).json({});
    }
    next();
});


app.get("/",(req,res)=>{
    res.end("Welcome to LMS Backend")
});

app.use("/admin", require("./routes/admin"));

// app.use("/admin", require("./routes/admin"));


app.listen(8081,()=>{
    console.log("API project running on http://localhost:8081/");
});