
import { connectToDatabase } from "@/app/database/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {

    const useData = await request.json();
    const { db } = await connectToDatabase();
    try {
        const existingUser = await db.collection('users').findOne({ email: useData.email });

        if (existingUser) {
            return new Response(JSON.stringify({ message: "User already exists" }), { status: 400,});
        }
        const result = await db.collection('users').insertOne(useData);
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}


export const GET =async ()=>{
  
const { db } = await connectToDatabase();

try {

    const result= await db.collection('users').find({role:'admin'}).toArray();
    return NextResponse.json(result);
} catch (error) {
    return NextResponse.json({ message: err.toString() });
}
}

// delete user 
// delete admin 
export const DELETE = async (request) => {
    const id = request.nextUrl.searchParams.get("id");
    console.log(id);
    const { db } = await connectToDatabase();
    const res = await db.collection("users").deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json(res);
  };