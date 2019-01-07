var db = require("../../models");

module.exports = function(app) {

// RETRIEVE THE DATA FROM THE BULLS DATABASE
app.get("/api/bulls_data", function(req, res){
    db.Bull.findAll({}).then(function(data){
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
};