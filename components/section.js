import connectMongoDB from "@/libs/mongodb";
import Link from "next/link";
import ExpandBtn from "./expandbtn";
import RemoveBtn from "./removeBtn";
import MeetingTimeList from "./meetingtimelist";
import RecitationList from "./recitationlist";
import AddBtn from "./addBtn";
import RecitationModel from "@/models/recitation";

export default async function Section({course_id, number, meetingTimes, _id}) {
    const recitations = await getServerSideProps(_id);
    return (
        <div className="pl-2">
            <input type="checkbox"/><ExpandBtn/><AddBtn/><Link href={"/editSection"}> <span className="font-bold underline">{number}</span> </Link><RemoveBtn/>
            <MeetingTimeList meetingTimes={meetingTimes}/>
            <RecitationList section_id={_id} recitations={recitations}/>
        </div>
    );
};

export async function getServerSideProps(section_id) {
    await connectMongoDB();
    try {
        const recitations = await RecitationModel.find();
        return recitations.filter((recitation) => recitation.section_id.valueOf() == section_id.valueOf());
    } catch (error) {
        console.error("Error fetching recitations:", error);
        return [];
    }
};