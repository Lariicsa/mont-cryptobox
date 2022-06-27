const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With, Accept, x-jwt-token"
    );
    
    // intercept options method
    if ("OPTIONS" === req.method) {
        res.send(200);
    } else {
        next();
    }
};

//CORS config
app.use(express.json());
app.options("*", cors());
app.use(allowCrossDomain);

// Static Files
const path = __dirname + '/views/';
app.use(express.static(path));

app.get('/', (req, res, next) => {
    res.sendFile(path + "index.html");
});

// entry point
const startServer =() => {
    const PORT = process.env.PORT;
    console.log(`Enviroment ${PORT}`);
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
};

startServer();

module.exports = app;
