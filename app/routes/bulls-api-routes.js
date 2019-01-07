var db = require("../../models");
var moment = require("moment");
axios.defaults.headers.common["Ocp-Apim-Subscription-Key"] =
  process.env.NBA_API;

module.exports = function(app) {
  // RETRIEVE THE DATA FROM THE BULLS DATABASE
  app.get("/api/bulls_data", function(req, res) {
    db.Bull.findAll({}).then(function(data) {
      //   console.log(data);
      res.json(data);
    });
  });

  // DELETE PLAYER FROM BULLS DATABASE
  //   app.delete("/api/bulls/:id", function(req, res) {
  //     db.Bull.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(data) {
  //       res.json(data);
  //     });
  //   });
  app.get("/api/boxscore", function(req, res) {
    var day = moment().format("YYYY - DD - MMM");

    axios
      .get("https://api.fantasydata.net/v3/nba/stats/JSON/BoxScores/" + day)
      .then(function(result) {
        var data = result.data;
        var gameData = {};
        for (var i = 0; i < data.length; i++) {
          if (
            data[i].Game.AwayTeam === "CHI" ||
            data[i].Game.HomeTeam === "CHI"
          ) {
            gameData = data[i];
            break;
          }
        }
        if (Object.keys(gameData).length === 0) {
          gameData.status = "No game";
          res.json(gameData);
        } else {
          res.json(gameData);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};
