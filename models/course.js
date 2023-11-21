import mongoose, { Schema } from "mongoose";
import sectionSchema from "./section";

const courseSchema = new Schema(
    {
        name: String,
        sections: [sectionSchema]
    }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;