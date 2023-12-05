import connectMongoDB from "@/libs/mongodb";
import RecitationModel from "@/models/recitation";
import SectionModel from "@/models/section";
import CourseModel from "@/models/course";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name} = await request.json();
    await connectMongoDB();
    const newCourse = new CourseModel({_id: new mongoose.Types.ObjectId(), name: name});
    await newCourse.save();
    return NextResponse.json({message: "Course Created"}, {status: 201});
};

export async function GET() {
    await connectMongoDB();
    const courses = await CourseModel.find();
    return NextResponse.json({courses}, {status: 200});
};

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    const sections = await SectionModel.find({course_id: id});
    for(let section of sections) {
        const recitations = await Recitation.find({section_id: section._id});
        for(let recitation of recitations) {
            await RecitationModel.findByIdAndDelete(recitation._id);
        }
    }
    await SectionModel.deleteMany({course_id: id});
    await CourseModel.findByIdAndDelete(id);
    return NextResponse.json({message: "Course Deleted"}, {status: 200});
};