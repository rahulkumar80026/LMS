const express = require("express")
var cors = require('cors')
const app = express();
const cookiesParser = require("cookie-parser")

// path route
const userRoutes = require("./routes/User")
const profileRoutes = require("./routes/Profile")
const paymentsRoutes = require("./routes/Payment")
const courseRoutes = require("./routes/Course")



const database = require("./config/database")
const {cloudinaryConnect} = require("./config/cloudinary")
const fileUpload = require("express-fileupload")
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;

// database connect
database.connect();

// middlewares
app.use(express.json());
app.use(cookiesParser());
app.use(
    cors({
         origin:"http://localhost:3000",
         credentials:true
    })
)

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)

// cloudinary connection
cloudinaryConnect();

// routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/Profile",profileRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/payment",paymentsRoutes);


// def route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is up and running......."
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})