const router = require("express").Router();
const draftController = require("../../controllers/draftController");

//GET route for all apparel and post route to add new apparel
// matches /api/apparel
router.route("/").post(draftController.create);

module.exports = router;
