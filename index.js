const express=require("express");
const app = express();
require("dotenv").config();
const mongoose=require('mongoose');
app.use(express.json());
mongoose.connect(process.env.Mongo)
.then(()=>console.log('db atlas connected succéesfully!!! '));
//connect widh db atlas
app.listen(process.env.PORT||6000,(err)=>{err?console.log(err)
    :console.log(`server is running in this port"${process.env.PORT}"`)});//conected server and making

app.get("/",(req,res)=>{
    res.send('Hello! In My Social Media App')
});
app.use("/users",Route);
