import AddCourse from "./addCourse";
import Course from "./course";
import CourseModel from "@/models/course";
import connectMongoDB from "@/libs/mongodb";

export default async function Courselist() {
    const courses = await getServerSideProps();

    return (
        <div className="text-sm">
            <AddCourse/>
            {courses.map((course) => (
                <Course key={course._id} name={course.name} _id={course._id}/>
            ))}
        </div>
    );
};

async function getServerSideProps() {
    await connectMongoDB();
    try {
        const courses = await CourseModel.find();
        return courses;
    } catch (error) {
        console.error("Error finding courses:", error);
        return [];
    }
};