'use client';

import { useState } from "react";

export default function AddRecitation({section_id}) {
    const [number, setNumber] = useState('');
    const meetingTimes = [];
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${window.location.toString()}api/recitations`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({section_id, number, meetingTimes})
            });
            if(!res.ok) {
                throw new Error("Failed to create recitation.");
            }
            window.location.reload();
            setNumber('');
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <div className="text-black bg-gray text-xs w-11/12 py-1 pl-1">
            <form onSubmit={handleSubmit}>
                <span>Recitation/Lab Number: </span>
                <input
                    type="text"
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Recitation Number"
                    value={number}
                />
                <input type="submit" value="Add Recitation" className="bg-black text-antiquewhite px-1"/>
                <input type="submit" value="Cancel" className="bg-black text-antiquewhite px-1 ml-2"/>
            </form>
        </div>
    );
};