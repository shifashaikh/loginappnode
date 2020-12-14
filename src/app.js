const express =require("express");
const path= require("path");
const app=express();
PORT=process.env.PORT || 5000;
// const hbs=require("hbs");
require("./db/connection");

const static_path =path.join(__dirname,"../public")
const template_path =path.join(__dirname,'../templates/views');
// const partials_path =path.join(__dirname,'../templates/partials');


const Register = require("./models/registration");

// app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",template_path);

// hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");

})

app.get("/registration",(req,res)=>{
    res.render("registration");

})


// create new new in db
app.post("/registration",async(req,res)=>{
  try {
    const pass =req.body.password;
    const conpass=req.body.conpassword;    

    if(pass===conpass){
        // console.log("equal");
        const registerEmployee= new Register({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            conpassword:req.body.conpassword,
            address:req.body.address,
            phone:req.body.phone,
            
        })

        // const checkemail = await Register.findOne({email:email});
        // console.log(checkemail);
        // if(checkemail!==''){
        //     res.send("Email is Already Taken");
        // }
// save data
       const register=await registerEmployee.save();
       
       res.status(201).render("index");

    }else{
        res.send("passwords not matching");
    }

}
  catch (error) {
    res.status(404).send(error);
  }

})



app.get("/login",(req,res)=>{
  res.render("login");
})


// check login
app.post("/login",async(req,res)=>{
   try {
       const email=req.body.email;
       const password=req.body.password;

   const useremail = await Register.findOne({email:email});
if(useremail.password=== password){
    res.status(201).send([{name:useremail.name},{email_id:useremail.email},{address:useremail.address},{phone:useremail.phone}]);
}
else{
    res.send("Invalid Credentials");
}
//    console.log(useremail);

   } catch (error) {
      res.status(404).send("Invalid email");     
   }
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})