const mongoose = require("mongoose");

const DB = process.env.DATABASE || "mongodb+srv://chinnu773:chinnu773@cluster0.wiy1vbq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error hai" + error.message))