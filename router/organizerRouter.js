const { registerOrganizer, getAllOrganizers, getAllOrganizersEvents } = require("../controller/organizerCOnt");

const router = require("express").Router();

router.post("/organizers/register", registerOrganizer);
router.get("/organizer", getAllOrganizers)
router.get("/organizer/:id", getAllOrganizersEvents)

// router.post("/organizers/login", login);

module.exports = router;
