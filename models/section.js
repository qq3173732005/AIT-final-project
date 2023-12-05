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

const SectionModel = mongoose.models.SectionModel || mongoose.model("SectionModel", sectionSchema);

export default SectionModel;