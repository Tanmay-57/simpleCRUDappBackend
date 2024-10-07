const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js");

const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose.connect('mongodb+srv://tanmayshidhani:KuwmoYrLbeH4HmY7@freecodecampdb.sa9wi.mongodb.net/freeCodeCampDB?retryWrites=true&w=majority&appName=freeCodeCampDB')
.then(()=>{
    console.log("Conected to Database")
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000')
    })
})
.catch(()=>{
    console.log("Connection Failure")
})
;