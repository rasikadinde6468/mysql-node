var express =require("express");
var Admin = require("../models/Admin");
var router = express.Router();



router.put("/", (req,res)=>{
    let body = req.body;
    let admin = new Admin();
   
    admin.name = body.name;
    admin.email = body.email;
    admin.password = body.password;

    admin.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:"result"}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:"err"}));
    });
   

})

router.post("/", (req,res)=>{
    res.end("update cALLED")
    
})

router.get("/", (req,res)=>{
    
    res.end("list cALLED")
})

router.get("/:id", (req,res)=>{
    res.end("get id cALLED")
    
})

router.delete("/:id", (req,res)=>{
    res.end("delete cALLED")
    
})

module.exports=router;
