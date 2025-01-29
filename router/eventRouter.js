const { createEvent, createGuest, updateEvent, deleteEvent, getAllEvents, getOneEvent } = require("../controller/eventCont");

const eventRouter = require("express").Router();

eventRouter.post("/events/create/:organizerId", createEvent)
eventRouter.put("/events/guest/:id", createGuest)
eventRouter.put("/events/:id", updateEvent)
eventRouter.get("/events", getAllEvents)
eventRouter.get("/events/:id", getOneEvent)
eventRouter.delete("/events/:id", deleteEvent)






module.exports = eventRouter;
