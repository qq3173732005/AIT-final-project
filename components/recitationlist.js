import AddRecitation from "./addRecitation";
import Recitation from "./recitation";

export default function RecitationList({section_id, recitations}) {
    return(
        <div className="pl-12">
            <AddRecitation section_id={section_id}/>
            {recitations.map((recitation) => (
                <Recitation key={recitation._id} section_id={recitation.section_id} number={recitation.number} meetingTimes={recitation.meetingTimes}/>
            ))}
        </div>
    );
};