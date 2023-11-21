import AddMeetingTime from "./addMeetingTime";

export default function AddRecitation() {
    return (
        <form className="text-gray text-xs">
            <span>Recitation/Lab Number: </span>
            <input type="text"/>
            <AddMeetingTime/>
            <input type="submit" className="bg-gray text-antiquewhite px-1"/>
            <input type="submit" value="Cancel" className="bg-gray text-antiquewhite px-1 ml-2"/>
        </form>
    );
};