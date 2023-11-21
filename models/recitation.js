import mongoose, { Schema } from "mongoose";
import meetingTimeSchema from "./meetingTime";

const recitationSchema = new Schema(
    {
        number: String,
        meetingTimes: [meetingTimeSchema]
    }
);

const Recitation = mongoose.models.Recitation || mongoose.model("Recitation", recitationSchema);

export default Recitation;