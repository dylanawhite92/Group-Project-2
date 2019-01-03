var db = require("../models");
module.exports = function (app) {

app.get("/statlist", function (req, res) {
        db.Stat.findOne({where:{ name: "Lebron"}}).then(function (data) {
            console.log(data);
        })
    })
}