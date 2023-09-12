const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complain_schema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: true,
  },
  complain: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

//creating collection
const Complain = new mongoose.model("complain", complain_schema);

//export collection
module.exports = { Complain };
