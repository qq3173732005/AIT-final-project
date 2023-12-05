import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
    {
        name: String
    }
);

const CourseModel = mongoose.models.CourseModel || mongoose.model("CourseModel", courseSchema);

export default CourseModel;