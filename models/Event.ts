import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;
