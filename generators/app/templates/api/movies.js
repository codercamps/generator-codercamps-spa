var express = require('express');
var router = express.Router();
router.get('/movies', function (req, res, next) {
    var movies = [
        { id: 1, title: "Star Wars", director: "Lucas" },
        { id: 2, title: "The Martian", director: "Scott" },
        { id: 3, title: "Ex Machina", director: "Garland" }
    ];
    res.json(movies);
});
module.exports = router;
