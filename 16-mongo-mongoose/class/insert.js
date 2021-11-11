const csv = require("csvtojson");
const path = require("path");
const Agent = require("./agent");
const pathToFile = path.resolve("../class/agents.csv");

csv()
  .fromFile(pathToFile)
  .then((agents) => {
    const agentsCollection = agents
      .map((agent) => {
        return {
          license_id: Number(Object.values(agent)[0].trim()),
          full_name: Object.values(agent)[1].trim(),
          city: Object.values(agent)[2].trim(),
        };
      })
      .filter((agent) => {
        return agent.city && agent.full_name && agent.license_id;
      });

    Agent.insertMany(agentsCollection)
      .then(() => console.log("inserted all"))
      .catch(() => console.log("insert failed"));
  });
