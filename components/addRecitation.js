import AddMeetingTime from "./addMeetingTime";

export default function AddRecitation() {
    return (
        <div className="text-black bg-gray text-xs w-11/12 py-1 pl-1">
            <form>
                <span>Recitation/Lab Number: </span>
                <input type="text"/>
                <input type="submit" value="Add Recitation" className="bg-black text-antiquewhite px-1"/>
                <input type="submit" value="Cancel" className="bg-black text-antiquewhite px-1 ml-2"/>
            </form>
            <AddMeetingTime/>
        </div>
    );
};