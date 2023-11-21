import AddBtn from "./addBtn";
import ExpandBtn from "./expandbtn";
import MeetingTimeList from "./meetingtimelist";
import RemoveBtn from "./removeBtn";
import Link from "next/link";

export default function Recitation() {
    return(
        <div className="pl-2">
            <input type="checkbox"/><ExpandBtn/><AddBtn/><Link href={"/editRecitation"}> <span className="font-bold underline">Recitation</span> </Link><RemoveBtn/>
            <MeetingTimeList/>
        </div>
    );
};