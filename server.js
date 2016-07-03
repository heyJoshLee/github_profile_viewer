var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    fs = require("fs");


var app = express();

var PRODUCTS_FILE = path.join(__dirname, "products.json");


// Set Port
app.set("port", (process.env.PORT || 3000));

// Set Static path
app.use(express.static(path.join(__dirname, "client")));

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// Start server
app.listen(app.get("port"), function() {
  console.log("Server has started on port: " + app.get("port"));
});