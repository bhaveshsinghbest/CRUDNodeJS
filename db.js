const mongoose=require('mongoose'); 
 
mongoose.connect('mongodb://127.0.0.1:27017/CrudDB',(err) => { 
    if(!err) 
    console.log("Connection established"); 
    else 
    console.log("connection failed"+ JSON.stringify(err,undefined,2)); 
}); 
 
module.exports=mongoose;