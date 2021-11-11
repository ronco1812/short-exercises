const express = require("express");
const cors = require("cors");
const Agent = require("./agent");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("/cities", (_req, res) => {
  Agent.find({})
    .distinct("city")
    .then((cities) => {
      res.json(cities);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.get("/agents", (req, res) => {
  const { city } = req.query;
  Agent.find({ city })
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.sendStatus(400);
    });
});

app.put("/agent/:id/edit", (req, res) => {
  const { id } = req.params;
  const { city } = req.body;
  Agent.findOneAndUpdate({ license_id: id }, { city })
    .then((agent) => {
      res.json(agent);
    })
    .catch((err) => {
      res.sendStatus(400);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
