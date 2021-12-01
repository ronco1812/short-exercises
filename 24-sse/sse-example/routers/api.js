const express = require("express");
const apiRouter = express.Router();

const { fetchStocks } = require("../controllers/api");
apiRouter.get("/fetch/stocks", fetchStocks);

module.exports = apiRouter;
