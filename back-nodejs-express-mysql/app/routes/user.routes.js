module.exports = app => {
    const user = require("../controllers/user.controller.js");

    app.post("/user/", user.create);

    // Login Customer
    app.post("/auth", user.login);


};