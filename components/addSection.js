import AddMeetingTime from "./addMeetingTime";

export default function AddSection () {
    return (
        <form className="text-white text-xs bg-gray w-11/12 py-1 pl-1">
            <span>Section Number: </span>
            <input type="text"/>
            <AddMeetingTime/>
            <input type="submit" value="Add Section" className="bg-black text-antiquewhite px-1"/>
            <input type="submit" value="Cancel" className="bg-black text-antiquewhite px-1 ml-2"/>
        </form>
    );
};