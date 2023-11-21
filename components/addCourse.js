export default function AddCourse() {
    return (
        <div className="bg-black flex flex-col">
            <button className="text-antiquewhite text-base font-bold border-b-1 w-28 pl-2">Add Course:</button>
            <form className="text-sm font-bold py-1">
                <span className="text-antiquewhite pl-6 pr-1">Course Name:</span>
                <input type="text"/>
                <input type="submit" className="bg-antiquewhite text-black px-1 mx-1"/>
            </form>
        </div>
    );
};