import mongoose, { Schema } from "mongoose";
import meetingTimeSchema from "./meetingTime";
import recitationSchema from "./recitation";

const sectionSchema = new Schema(
    {
        number: String,
        meetingTimes: [meetingTimeSchema],
        recitations: [recitationSchema]
    }
);

const Section = mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;