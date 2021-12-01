const express = require("express");
const app = express();
const port = 3000;

const DELAY = 2000;
const LIMIT = 20;
let connections = [];

app.get("/long/polling", (req, res) => {
  res.setHeader("Content-Type", "Text/html;charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");
  connections.push(res);
});

let tick = 0;
setTimeout(function run() {
  if (++tick > LIMIT) {
    connections.map((res) => {
      res.write("END");
      res.end();
    });
    connections = [];
    tick = 0;
    return;
  }
  connections.map((res, i) => {
    if (i === 0) res.write(`Hello rama\n\n`);
    // if (i === 1) res.write(`Hello amit`);
  });

  setTimeout(run, DELAY);
}, DELAY);

app.listen(port, () => {
  console.log(`running on ${port}`);
});
