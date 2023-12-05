import connectMongoDB from "@/libs/mongodb";
import Link from "next/link";
import ExpandBtn from "./expandbtn";
import RemoveBtn from "./removeBtn";
import MeetingTimeList from "./meetingtimelist";
import RecitationList from "./recitationlist";
import AddBtn from "./addBtn";
import RecitationModel from "@/models/recitation";

export default async function Section({course_id, number, meetingTimes, _id}) {
    const recitations = await getServerSideProps();
    console.log(meetingTimes);
    console.log(recitations);
    return (
        <div className="pl-2">
            <input type="checkbox"/><ExpandBtn/><AddBtn/><Link href={"/editSection"}> <span className="font-bold underline">{number}</span> </Link><RemoveBtn/>
            <MeetingTimeList/>
            <RecitationList/>
        </div>
    );
};

export async function getServerSideProps() {
    await connectMongoDB();
    try {
        const recitations = await RecitationModel.find();
        return recitations;
    } catch (error) {
        console.error("Error fetching meeting times or recitations:", error);
        return [];
    }
}