import AddRecitation from "./addRecitation";
import Recitation from "./recitation";

export default function RecitationList() {
    return(
        <div className="pl-12">
            <AddRecitation/>
            <Recitation/>
        </div>
    );
};