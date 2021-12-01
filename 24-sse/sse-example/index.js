const express = require("express");
const app = express();
const apiRouter = require("./routers/api");

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
