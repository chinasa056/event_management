const express = require("express");
const connection = require("./database/dbconnection")
const router = require("./router/organizerRouter");
const eventRouter = require('./router/eventRouter');

const port = 2233;

const app = express();

app.use(express.json());

app.use(router);
app.use(eventRouter);

app.listen(port, async () => {
    await connection()
    console.log(`app is running on port:${port}`);
});
