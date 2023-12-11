'use client';

import { useState } from "react";
import AddMeetingTime from "./addMeetingTime";

export default function AddSection ({course_id}) {
    const [number, setNumber] = useState('');
    const meetingTimes = [];
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${window.location.toString()}api/sections`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({course_id, number, meetingTimes})
            });
            if(!res.ok) {
                throw new Error("Failed to create section.");
            }
            window.location.reload();
            setNumber('');
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <div className="text-black text-xs bg-gray w-11/12 py-1 pl-1">
            <form onSubmit={handleSubmit}>
                <span>Section Number: </span>
                <input
                    type="text"
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Section Number"
                    value={number}
                />
                <input type="submit" value="Add Section" className="bg-black text-antiquewhite px-1"/>
                <input type="submit" value="Cancel" className="bg-black text-antiquewhite px-1 ml-2"/>
            </form>
            <AddMeetingTime/>
        </div>
    );
};