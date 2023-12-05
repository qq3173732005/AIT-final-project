import AddBtn from "./addBtn";
import ExpandBtn from "./expandbtn";
import MeetingTimeList from "./meetingtimelist";
import RemoveBtn from "./removeBtn";
import Link from "next/link";

export default function Recitation({section_id, number, meetingTimes}) {
    return(
        <div className="pl-2">
            <input type="checkbox"/><ExpandBtn/><AddBtn/><Link href={"/editRecitation"}> <span className="font-bold underline">{number}</span> </Link><RemoveBtn/>
            <MeetingTimeList meetingTimes={meetingTimes}/>
        </div>
    );
};