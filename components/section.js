import Link from "next/link";
import ExpandBtn from "./expandbtn";
import RemoveBtn from "./removeBtn";
import MeetingTimeList from "./meetingtimelist";
import RecitationList from "./recitationlist";
import AddBtn from "./addBtn";

export default function Section() {
    return (
        <div className="pl-2">
            <input type="checkbox"/><ExpandBtn/><AddBtn/><Link href={"/editSection"}> <span className="font-bold underline">Section</span> </Link><RemoveBtn/>
            <MeetingTimeList/>
            <RecitationList/>
        </div>
    );
};