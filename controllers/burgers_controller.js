// DEPENDENCIES
var express = require("express");
var router = express.Router();

// Import burger.js
var burger = require("../models/burger.js");


// Routes
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ],
        function (result) {
            
        });
    res.redirect('/');
});


router.put("/burgers/update/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;