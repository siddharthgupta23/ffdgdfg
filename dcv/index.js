const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const cors=require("cors")
const authRoutes =require("./routes/auth.js")
const listingRoutes=require("./routes/listing.js")
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use("/auth",authRoutes)
app.use("/properties",listingRoutes)
const PORT =3082
mongoose.connect(process.env.MONGO_URL,{
    dbName:"database",
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
   app.listen(PORT,() =>console.log(`Server Port :${PORT}`))
})
.catch((err) => console.log(`${err} did not match`));

const imageroutes = require('./routes/imageroutes');





app.use('/api', imageroutes); // Mount image routes under '/api/images'



