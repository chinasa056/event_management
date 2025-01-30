const { createwedding, getAllWedding } = require("../controller/weddingController");

const weddingrouter = require("express").Router();

weddingrouter.post("/wedding", createwedding)
weddingrouter.get("/wedding", getAllWedding)


module.exports = weddingrouter;