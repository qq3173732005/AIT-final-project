export default function MeetingTime({day, startTime, endTime}) {
    return(
        <div>
            {day} {startTime}-{endTime}
        </div>
    );
};