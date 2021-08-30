const express = require('express');
const app = express();
const cors = require("cors");

require('dotenv/config');

const PORT = 3000;
const API_URL = process.env.API_URL;

const blocksRouter = require('./routers/block');
const nodesRouter = require('./routers/node');

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(`${API_URL}/blocks`, blocksRouter);
app.use(`${API_URL}/nodes`, nodesRouter);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}${API_URL}`);
})
