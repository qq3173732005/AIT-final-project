export default function AddMeetingTime() {
    return (
        <div className="text-black text-xs bg-gray w-11/12 py-1 pl-1 flex flex-row my-1">
            <span>Meeting Day:</span>
            <select className="text-black mx-1" required>
                <option value="sun">Sun</option>
                <option value="mon">Mon</option>
                <option value="tue">Tue</option>
                <option value="wed">Wed</option>
                <option value="thu">Thu</option>
                <option value="fri">Fri</option>
                <option value="sat">Sat</option>
            </select>
            <span>Start Time:</span>
            <input type="time" className="mx-1" required/>
            <span>End Time:</span>
            <input type="time" className="mx-1" required/>
            <input type="submit" value="Add Time" className="bg-black text-antiquewhite px-1"/>
        </div>
    );
};