const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const app = express();

app.listen(3000);

const connectionStr = "mongodb://localhost:27017/Test2"; 
mongoose.set("strictQuery", true); 
const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}; 
  
 conn = mongoose.connect(connectionStr, options)
 .then((data) => { console.log("Connected to DB")})
 .catch((err) => { console.log('eror in connecting..')})

app.use((req, res, next) => {
    next();
})

app.use(router);