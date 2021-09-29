const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "BIENVENIDO"
    })
})

app.get("/api/v1", (req, res) => {
    res.json({
        message: "Testing Heroku Deploy"
    });
});

app.get("/api/v1/users", (req, res) => {
    res.json([
        {
        id: 1,
        firstname: "Ricardo",
        lastname: "Gutierrez",
        email: "gtzricky1@gmail.com"
        }
    ]);
});

module.exports = app;