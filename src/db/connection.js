const mongoose=require("mongoose");
MONGO_URL="mongodb://shifa123:shifa123@nodejscrud-shard-00-00.guepm.mongodb.net:27017,nodejscrud-shard-00-01.guepm.mongodb.net:27017,nodejscrud-shard-00-02.guepm.mongodb.net:27017/registration?ssl=true&replicaSet=atlas-gysq4s-shard-0&authSource=admin&retryWrites=true&w=majority";
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