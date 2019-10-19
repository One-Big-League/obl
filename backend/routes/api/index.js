// const path = require("path");
const router = require("express").Router();
const draftRoutes = require("./draft");

//route to get inventory
router.use("/draft", draftRoutes);

//I made this an index so we could add routes for customer logins later

// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );

module.exports = router;
