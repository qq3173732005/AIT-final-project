import connectMongoDB from "@/libs/mongodb";
import Recitation from "@/models/recitation";
import Section from "@/models/section";
import Course from "@/models/course";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name} = await request.json();
    await connectMongoDB();
    const newCourse = new Course({_id: new mongoose.Types.ObjectId(), name: name});
    await newCourse.save();
    return NextResponse.json({message: "Course Created"}, {status: 201});
};

export async function GET() {
    await connectMongoDB();
    const courses = await Course.find();
    return NextResponse.json({courses});
};

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    const sections = await Section.find({course_id: id});
    for(let section of sections) {
        const recitations = await Recitation.find({section_id: section._id});
        for(let recitation of recitations) {
            await Recitation.findByIdAndDelete(recitation._id);
        }
    }
    await Section.deleteMany({course_id: id});
    await Course.findByIdAndDelete(id);
    return NextResponse.json({message: "Course Deleted"}, {status: 200});
};