import AddMeetingTime from "./addMeetingTime";

export default function AddRecitation() {
    return (
        <form className="text-white bg-gray text-xs w-11/12 py-1 pl-1">
            <span>Recitation/Lab Number: </span>
            <input type="text"/>
            <AddMeetingTime/>
            <input type="submit" value="Add Recitation" className="bg-black text-antiquewhite px-1"/>
            <input type="submit" value="Cancel" className="bg-black text-antiquewhite px-1 ml-2"/>
        </form>
    );
};