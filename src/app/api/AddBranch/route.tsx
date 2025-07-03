import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  const body = await request.json();
  const client = await clientPromise;
  const database = client.db("Halal_Loan_Foundation_DB");
  const collection = database.collection("Branch");

  const doc = await collection.findOne(
    {
      name: body.name
    }
  );
  if (doc) {
    return Response.json({success: false, error: true, message: "Branch already exist!"});
  }

  const result = await collection.insertOne(body);

  return NextResponse.json(result);
}