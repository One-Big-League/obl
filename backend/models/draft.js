const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const draftSchema = new Schema({
  leagueId: { type: Number, required: true },
  leagueYear: { type: Number, required: true },
  sport: { type: String, trim: true, required: true },
  team1: {
    managerId: { type: Number, required: true },
    p1: { type: Number },
    p2: { type: Number },
    p3: { type: Number },
    p4: { type: Number },
    p5: { type: Number }
  },
  team2: {
    managerId: { type: Number, required: true },
    p1: { type: Number },
    p2: { type: Number },
    p3: { type: Number },
    p4: { type: Number },
    p5: { type: Number }
  }
});

const Draft = mongoose.model("draftResults", draftSchema);

module.exports = Draft;
