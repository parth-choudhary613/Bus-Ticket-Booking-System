const express= require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Signup")
const userShema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cpassword:String
})

const newuser= mongoose.model('users',userShema,'users')

app.post('/signup',(req,res)=>{
    newuser.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.post('/login',(req,res)=>{
    const {name,email,password}= req.body;
    newuser.findOne({email:email})
    .then(user =>{
        if(user){
        if(user.password===password && user.name===name){
            res.json('success')
        }else{res.json('password incorrect')}
    }else{res.json('no record existed')}
})
})
app.listen(8500,()=>{console.log("server started")})