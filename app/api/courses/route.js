import connectMongoDB from "@/libs/mongodb";

export async function POST(request) {
    const {name, sections} = await request.json();
    await connectMongoDB();
    await Course.create(name, sections);
    return NextResponse.json({message: "Course Created"}, {status: 201});
};