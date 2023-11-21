export default function AddMeetingTime() {
    return (
        <div className="flex flex-row my-1">
            <span>Meeting Day:</span>
            <select className="mx-1">
                <option value="sun">Sun</option>
                <option value="mon">Mon</option>
                <option value="tue">Tue</option>
                <option value="wed">Wed</option>
                <option value="thu">Thu</option>
                <option value="fri">Fri</option>
                <option value="sat">Sat</option>
            </select>
            <span>Start Time:</span>
            <input type="time" className="mx-1"/>
            <span>End Time:</span>
            <input type="time" className="mx-1"/>
            <input type="submit" value="Add Time" className="bg-gray text-antiquewhite px-1"/>
        </div>
    );
};