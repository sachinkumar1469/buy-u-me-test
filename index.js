const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes= require("./route");

// Server is running on port 8000
const app = express();

// to parse the body request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Using mongodb atlas to connect to  the db
mongoose.connect(`mongodb+srv://sachinyadav1469:Sachin%40123@cluster0.my3twen.mongodb.net/buyume?retryWrites=true&w=majority`)
        .then(result=>{
            console.log("Connected to db")
            app.listen(8000);
        })
        .catch(err=>{
            console.log("Unable to connect to db");
        })
        
// Routes
app.use(routes);