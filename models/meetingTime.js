import mongoose, { Schema } from "mongoose";
import timeSchema from "./time";

const meetingTimeSchema = new Schema(
    {
        day: String,
        startTime: timeSchema,
        endTime: timeSchema
    }
);

const MeetingTime = mongoose.models.MeetingTime || mongoose.model("MeetingTime", meetingTimeSchema);

export default MeetingTime;