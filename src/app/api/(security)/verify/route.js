// src/app/api/login/route.js
import dbConnect from "@/config/connectDB";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  await dbConnect();

  try {
    const { username, password } = await request.json();

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const sessionToken = { username, loggedIn: true };

    return NextResponse.json(
      { message: "Login successful" },
      { headers: { "Set-Cookie": `session=${JSON.stringify(sessionToken)}; Path=/; HttpOnly;` } }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
