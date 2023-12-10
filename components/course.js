import Link from "next/link";
import ExpandBtn from "./expandbtn";
import SectionList from "./sectionlist";
import RemoveBtn from "./removeBtn";
import AddBtn from "./addBtn";

export default function Course({name, _id}) {
    return (
        <div className="pl-2">
            <input type="checkbox"/><ExpandBtn/><AddBtn/><Link href={"/editCourse"}> <span className="font-bold underline">{name}</span> </Link><RemoveBtn/>
            <SectionList course_id={_id}/>
        </div>
    );
};

async function getServerSideProps(context) {
    console.log(context);
    return 0;
}