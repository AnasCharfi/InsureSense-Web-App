const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();
const axios = require('axios');
const allowedOrigins = require('./app/config/urlCors');
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bat-pro application." });
});

app.use(cors({
    origin: function(origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        //if (!origin) return callback(null, true);
        if (allowedOrigins['HOST'].indexOf(origin) == -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(msg, false);
        } else {
            return callback(null, true);
        }

    }
}));

require("./app/routes/user.routes.js")(app);


//app.options('*', cors())

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});