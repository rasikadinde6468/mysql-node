
var database = require("./Database")



class Admin{
constructor(){
   this.id=0;
    this.name="";
    this.email="";
    this.password="";
    this.db = new Database();
    this.query="";
}
    

    save = ()=>{
        this.query = "INSERT INTO admins(name,email,password)";
        this.query+="VALUES ('" + this.name + " ', '" + this.email + "','" + this.password + "')";
        return new Promise((resolve,reject)=>{
         this.db.query(this.query,(err,result)=>{
            if(err)
                reject(err);
                 resolve(result);     
            
         });

        });
       
    };

update=()=>{
    this.query="update";
}

list=()=>{
    this.query="SELECT * FROM admins ORDER BY NAME"
}
 
get=()=>{
    this.query = "SELECT * FROM admins WHERE id = " + this.id;
}

delete =()=>{
    this.query = "DELETE FROM admins WHERE id=" + this.id;
}


}

module.exports = Admin;