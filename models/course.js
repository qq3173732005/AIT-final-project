import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
    {
        name: String
    }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;