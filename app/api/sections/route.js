import connectMongoDB from "@/libs/mongodb";
import Section from "@/models/section";
import Recitation from "@/models/recitation";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {course_id, number, meetingTimes} = await request.json();
    await connectMongoDB();
    const newSection = new Section({course_id: course_id, number: number, meetingTimes: meetingTimes});
    await newSection.save();
    return NextResponse.json({message: "Section Created"}, {status: 201});
};

export async function GET() {
    await connectMongoDB();
    const sections = await Section.find();
    return NextResponse.json({sections});
};

export async function DELETE(request) {    
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    const recitations = await Recitation.find({section_id: id});
    for(let recitation of recitations) {
        await Recitation.findByIdAndDelete(recitation._id);
    }
    await Section.findByIdAndDelete(id);
    return NextResponse.json({message: "Section Deleted"}, {status: 200});
};