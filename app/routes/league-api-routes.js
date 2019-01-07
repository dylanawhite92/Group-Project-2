var db = require("../../models");

module.exports = function(app) {
// RETRIEVE THE DATA FROM THE LEAGUE DATABASE
app.get("/api/league_data", function(req, res){
    db.League.findAll({}).then(function(data){
      console.log(data);
    });
  });
};