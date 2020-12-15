const mongoose=require("mongoose");
MONGO_URL="***************";
mongoose.connect(MONGO_URL,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true

})

.then(()=>{

    console.log("Connection Successful")
})
.catch((e)=>{
    console.log("connection Unsuccessfull")
})
