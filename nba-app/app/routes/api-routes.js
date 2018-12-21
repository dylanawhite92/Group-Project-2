// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var newBaller = require("../models/nba.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Chirp.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    console.log("Baller Data:");
    console.log(req.body);

    baller
      .create({
        id: req.body.id,
        team: req.body.team,
        created_at: req.body.created_at
      })
      .then(function(results) {
        // `results` here would be the newly created chirp
        res.end();
      });
  });
};
