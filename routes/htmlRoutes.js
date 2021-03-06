const express = require("express");
const router = express.Router();
const path = require("path");


module.exports = function (app){

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
}


router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  
  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  module.exports = router;
  