import Courselist from "./courselist";

export default function Coursebar() {
    return (
        <div className="bg-lightblue absolute flex flex-col w-5/12 inset-y-0 right-0 overflow-y-scroll">
            <Courselist className="flex-wrap"/>
        </div>
    );
};