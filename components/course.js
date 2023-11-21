import Link from "next/link";
import ExpandBtn from "./expandbtn";
import SectionList from "./sectionlist";
import RemoveBtn from "./removeBtn";
import AddBtn from "./addBtn";

export default function Course() {
    return (
        <div className="pl-2">
            <input type="checkbox"/><ExpandBtn/><AddBtn/><Link href={"/editCourse"}> <span className="font-bold underline">Course</span> </Link><RemoveBtn/>
            <SectionList/>
        </div>
    );
};