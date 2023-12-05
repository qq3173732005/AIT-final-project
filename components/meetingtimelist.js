import MeetingTime from "./MeetingTime";

export default async function MeetingTimeList({meetingTimes}) {
    if(!meetingTimes) {
        meetingTimes = [];
    }
    return(
        <div className="pl-12">
            {meetingTimes.map((meetingTime) => (
                <MeetingTime key={meetingTime._id} day={meetingTime.day} startTime={meetingTime.startTime} endTime={meetingTime.endTime}/>
            ))}
        </div>
    );
};