import mongoose, { Schema } from "mongoose";

const sectionSchema = new Schema(
    {
        course_id: mongoose.Schema.Types.ObjectId,
        number: String,
        meetingTimes: [
            {day: String, startTime: String, endTime: String}
        ]
    }
);

const Section = mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;