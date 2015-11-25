import express = require('express');
let router = express.Router();

/* GET movies */
router.get('/movies', function(req, res, next) {
  let movies = [
     {id:1, title:"Star Wars", director:"Lucas" },
     {id:2, title:"The Martian", director:"Scott" },
     {id:3, title:"Ex Machina", director:"Garland" }
  ];
  res.json(movies);
});

export = router;
