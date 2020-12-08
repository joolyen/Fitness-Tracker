const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to localhost or atlas URI defined in heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://joolyen2377:<password>@clusterjohnson.mgfl3.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// HTML Routes
app.use(require("./routes/html-routes.js"))
app.use(require("./routes/api-routes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});