const express =require("express");
const mongoose =require('mongoose');
const cors =require("cors");
const EmployeeModel =require('./model/Employee.js')
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/LoginDB")
app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>React.json(employees))
    .catch(err=>res.json(err))  

})


 app.post('/login',(req,res)=>{
  const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
        .then(user=>{
            if(user.password==password)
            {
                res.json("success");
            }
            else(user.password==password)
                {
                    res.json("incorrect password");
                }
        })
    
    

})


app.listen(3001,()=>{
    console.log("server is running")
})