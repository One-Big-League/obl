const db = require("../models");

module.exports = {
  //POST route to add a new draft
  create: function(req, res) {
    db.Draft.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
