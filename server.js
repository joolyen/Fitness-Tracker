const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 2377;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to localhost or atlas URI defined in heroku
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false,
  useUnifiedTopology: true
})

// HTML Routes
app.use(require("./routes/api-routes.js"))
app.use(require("./routes/html-routes.js"))

app.listen(PORT, function(){
    console.log(`App running on port ${PORT}!`);
});

