const express=require('express'); 
var app=express(); 
const bodyParser=require('body-parser'); 
 
const {mongoose}=require('./db.js'); 
var employeeController=require('./controllers/employeeController'); 
 
 
app.use(bodyParser.json()); 
 
app.listen(3000, () => console.log('Connected to server 3000...')); 
 
app.use('/employees',employeeController);