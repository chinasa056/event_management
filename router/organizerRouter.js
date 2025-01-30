const { registerOrganizer, getAllOrganizers, getAllOrganizersEvents } = require("../controller/organizerCont");

const router = require("express").Router();

router.post("/organizers/register", registerOrganizer);
router.get("/organizer", getAllOrganizers)
router.get("/organizer/:id", getAllOrganizersEvents)


module.exports = router;
