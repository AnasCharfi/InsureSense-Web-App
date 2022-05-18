const sql = require("./db.js");
const axios = require('axios');
const { createPool } = require("mysql2/promise");
// constructor
const User = function(user) {
    this.name = user.name;
    this.email = user.email;
    this.mdp = user.mdp;
    this.phone = user.phone;
};

User.create = (newUser, result) => {
    console.log("INSERT INTO `users`(`name`, `email`, `mdp`, `phone`) VALUES  ?", newUser);
    sql.query("INSERT INTO users SET  ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (id, result) => {
    sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

User.getAll = (result) => {
    sql.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        //console.log("users: ", res);
        result(null, res);
    });
};





User.findByName = (name, result) => {
    sql.query(`SELECT * FROM users WHERE name like "${name}%"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

User.login = (user, result) => {
    sql.query(
        "SELECT * FROM users WHERE email = ? AND mdp = ?", [user.email, user.mdp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.length == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            if (res.length) {
                console.log("found user: ", res[0]);
                result(null, res[0]);
                return;
            }
        }
    );
};
let login = (req, res) => {

    User.findOne({ username: req.body.username }, function(err, user) {
        if (!user) return res.status(401).json({ message: "Le nom d'utilisateur " + req.body.username + " n'est associée à aucun compte." });

        user.comparePassword(req.body.password, function(err, isMatch) {
            console.log(err, 'err comparePassword')
            if (!isMatch) return res.status(401).send({ message: "nom d'utilisateur ou mot de passe invalide" });

            // Make sure the user has been verified
            if (!user.isVerified) return res.status(401).send({ type: 'not-verified', message: "Votre compte n'a pas été vérifié." });
            // Login successful, write token, and send back user
            res.status(200).json({ token: user.generateAuthToken(user), user: user.toJSON() });
            // Make sure the user has been verified
            //if (!user.isVerified) return res.status(401).send({ type: 'not-verified', message: "Votre compte n'a pas été vérifié." });
            //var token = user.generateAuthToken(user);

            // Login successful, write token, and send back user
        });
    });
}

module.exports = User;