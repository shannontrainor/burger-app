//require express
const express = require("express");

//define port
const PORT = process.env.PORT || 8080

const app = express();

//static content from public
app.use(express.static("public"));

//parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require express handlebars
const exphbs = require("express-handlebars");

//set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import route from controllers
const controllers = require("./controllers/burgers-controller.js")

app.use(controllers);

//start server
app.listen(PORT, () => {
    //log when server starts
    console.log(`Server listening on: http://localhost:${PORT}`);
});

    