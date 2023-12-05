import connectMongoDB from "@/libs/mongodb";
import AddSection from "./addSection";
import SectionModel from "@/models/section";
import Section from "./section";

export default async function SectionList({course_id}) {
    const sections = await getServerSideProps(course_id);
    return (
        <div className="pl-12">
            <AddSection/>
            {sections.map((section) => (
                <Section key={section._id} course_id={course_id} number={section.number} meetingTimes={section.meetingTimes} _id={section._id}/>
            ))}
        </div>
    );
};

export async function getServerSideProps(course_id) {
    await connectMongoDB();
    try {
        const sections = await SectionModel.find();
        return sections.filter((section) => section.course_id.valueOf() == course_id.valueOf());
    } catch (error) {
        console.error("Error fetching sections:", error);
        return [];
    }
};