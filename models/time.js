import mongoose, { Schema } from "mongoose";

const timeSchema = new Schema(
    {
        hour: Number,
        minute: Number,
        am: Boolean
    }
);

const Time = mongoose.models.Time || mongoose.model("Time", timeSchema);

export default Time;