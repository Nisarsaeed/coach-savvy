import dbConnect from "@/config/connectDB";
import Category from "@/models/Category";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
      await dbConnect();
  
      const { id } = await params; // Extract the Category ID from the URL params
      if (!id) {
        return NextResponse.json(
          { message: "Category ID is required" },
          { status: 400 }
        );
      }
  
      const deletedCategory = await Category.findByIdAndDelete(id);
  
      if (!deletedCategory) {
        return NextResponse.json(
          { message: "Category not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: "Category deleted successfully", Category: deletedCategory },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting Category:", error);
      return NextResponse.json(
        { message: "Error deleting Category" },
        { status: 500 }
      );
    }
  }

  