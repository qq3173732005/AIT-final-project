import mongoose, { Schema } from "mongoose";

const recitationSchema = new Schema(
    {
        section_id: mongoose.Schema.Types.ObjectId,
        number: String,
        meetingTimes: [
            {day: String, startTime: String, endTime: String}
        ]
    }
);

const Recitation = mongoose.models.Recitation || mongoose.model("Recitation", recitationSchema);

export default Recitation;