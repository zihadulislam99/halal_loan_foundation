import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  const body = await request.json();
  const client = await clientPromise;
  const database = client.db("Halal_Loan_Foundation_DB");
  const collection = database.collection("Users_Collection");

  const doc = await collection.findOne({url: body.url});
  if (doc) {
    return Response.json({success: false, error: true, message: "User already exist!"});
  }

  const result = await collection.insertOne(body);

  return NextResponse.json(result);
}