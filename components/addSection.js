import AddMeetingTime from "./addMeetingTime";

export default function AddSection () {
    return (
        <form className="text-gray text-xs">
            <span>Section Number: </span>
            <input type="text"/>
            <AddMeetingTime/>
            <input type="submit" className="bg-gray text-antiquewhite px-1"/>
            <input type="submit" value="Cancel" className="bg-gray text-antiquewhite px-1 ml-2"/>
        </form>
    );
};