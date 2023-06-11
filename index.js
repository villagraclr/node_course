const express = require('express');
const path = require('path');
const app = express();


//To use global vars
require('dotenv').config();

const {create} = require('express-handlebars'); 
const hbs = create({
    extname: ".hbs"
});
//the template is handlebars
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use('/css', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts')));

//register routes
app.use("/", require("./routes/routes"));

app.listen(process.env.PORT, ()=>{
    console.log("working");
});