const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://carmel11:207855586carmel@cluster0.jtiol.mongodb.net/realEstateAgents?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const AgentSchema = new mongoose.Schema({
  license_id: {
    type: Number,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Agent = mongoose.model("Agent", AgentSchema);

module.exports = Agent;
