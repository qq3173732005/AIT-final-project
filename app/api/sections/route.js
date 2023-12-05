import connectMongoDB from "@/libs/mongodb";
import SectionModel from "@/models/section";
import RecitationModel from "@/models/recitation";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {course_id, number, meetingTimes} = await request.json();
    await connectMongoDB();
    const newSection = new SectionModel({course_id: course_id, number: number, meetingTimes: meetingTimes});
    await newSection.save();
    return NextResponse.json({message: "Section Created"}, {status: 201});
};

export async function GET() {
    await connectMongoDB();
    const sections = await SectionModel.find();
    return NextResponse.json({sections});
};

export async function DELETE(request) {    
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    const recitations = await RecitationModel.find({section_id: id});
    for(let recitation of recitations) {
        await RecitationModel.findByIdAndDelete(recitation._id);
    }
    await SectionModel.findByIdAndDelete(id);
    return NextResponse.json({message: "Section Deleted"}, {status: 200});
};