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

const RecitationModel = mongoose.models.RecitationModel || mongoose.model("RecitationModel", recitationSchema);

export default RecitationModel;