import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
  // Connect to the MongoDB client
  const client = await clientPromise;
  const database = client.db("Halal_Loan_Foundation_DB");
  const collection = database.collection("Users_Collection");

  // Query the collection to get data (all documents in this case)
  const data = await collection.find({}).toArray();

  // Return the data as a JSON response
  return NextResponse.json(data);
}