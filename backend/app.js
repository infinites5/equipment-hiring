const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const Razorpay = require('razorpay');

const errorMiddleware = require("./middleware/error");


// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}


const razorInstance = new Razorpay({
  key_id : process.env.RAZORPAY_API_KEY,
  key_secret : process.env.RAZORPAY_SECRET_KEY
})


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.post("/api/v1/razorpay/order",(req,res)=>{
  const { amount } = req.body;
  let options ={
    amount : amount * 100,
    currency : "INR",
    receipt: "receipt#1",
    payment_capture: 0, //1
  };
  console.log(req.body)
  razorInstance.orders.create(options,function(err,order){
    res.status(200).json(order)
    console.log(order)
  })
})

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
