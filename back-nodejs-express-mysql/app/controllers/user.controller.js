const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a User
    const user = new User({
        email: req.body.email,
        name: req.body.name,
        mdp: req.body.mdp,
        phone: req.body.phone
    });

    // Save User in the database
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        else res.send(data);
    });
};

// Login User
exports.login = (req, res) => {
    console.log("login called!")
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a User
    let user = new User({
        email: req.body.email,
        mdp: req.body.password
    });


    // Save User in the database
    User.login(user, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: err.message || "Login failed User.",
                message_id: 404
            });
        } else res.send({ message_id: 200, data });
    });
};



// Find a single User with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.userId
                });
            }
        } else res.send(data);
    });
};



exports.findByName = (req, res) => {
    User.findByName(req.params.name, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.name}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.name
                });
            }
        } else res.send(data);
    });
};