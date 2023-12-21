const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();
const port = process.env.APP_PORT || 3000;
const db = require("./app/models");
const path = require('path');
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
}).then(() => {
    console.log("database connected");
}).catch(() => {
    console.log("cannot connect to the database");
    process.exit();
})

require("./app/routes/tiketItsm.routes")(app);
app.get('/', (req, res) => res.send("Hai "));

app.use((req,res) => {
    res.status(404).json({
        success: false,
        message: "Url Not Found",
        data: []
    })
})

app.listen(port, () => console.log("Server Running on Port " + port));
module.exports.port = port