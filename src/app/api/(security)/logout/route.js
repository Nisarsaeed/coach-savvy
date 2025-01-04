// src/app/api/logout/route.js
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Logged out" },
    {
      headers: {
        "Set-Cookie": `session=; Path=/; HttpOnly; Max-Age=0;`, // Clear the cookie
      },
    }
  );
}
