const { createOtherEvent, getAllOtherEvents } = require("../controller/othereventController");

const otherevents = require("express").Router();

otherevents.post("/otherevents", createOtherEvent)
otherevents.get("/otherevents", getAllOtherEvents)


module.exports = otherevents;