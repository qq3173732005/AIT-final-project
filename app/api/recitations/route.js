import connectMongoDB from "@/libs/mongodb";
import Recitation from "@/models/recitation";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {section_id, number, meetingTimes} = await request.json();
    await connectMongoDB();
    const newRecitation = new Recitation({section_id: section_id, number: number, meetingTimes: meetingTimes, _id: new mongoose.Types.ObjectId()});
    await newRecitation.save();
    return NextResponse.json({message: "Recitation Created"}, {status: 201});
};

export async function GET() {
    await connectMongoDB();
    const recitations = await Recitation.find();
    return NextResponse.json({recitations});
};

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Recitation.findByIdAndDelete(id);
    return NextResponse.json({message: "Recitation Deleted"}, {status: 200});
};