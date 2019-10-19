const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//this is the entrance to the express router.
router.use("/api", apiRoutes);

//default route if api is not hit
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
