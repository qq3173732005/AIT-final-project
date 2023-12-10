'use client';

import { useState } from "react";

export default function AddCourse() {
    const [name, setName] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${window.location.toString()}api/courses`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({name})
            });
            if(!res.ok) {
                throw new Error("Failed to create course.");
            }
            window.location.reload();
            setName('');
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <div className="bg-black flex flex-col">
            <button className="text-antiquewhite text-base font-bold border-b-1 w-28 pl-2">Add Course:</button>
            <form onSubmit={handleSubmit} className="text-sm font-bold py-1">
                <span className="text-antiquewhite pl-6 pr-1">Course Name:</span>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Course Name"
                    value={name}
                />
                <input type="submit" value="Add Course" className="bg-antiquewhite text-black px-1 mx-1"/>
            </form>
        </div>
    );
};