var generate = require("../outfitGenerator.js");

var appRouter = function (app) {
  app.get("/", function(req, res) {
    var gender = req.query.gender;
    var sentence = generate(gender);
    res.status(200).send(sentence);
  });
}

module.exports = appRouter;