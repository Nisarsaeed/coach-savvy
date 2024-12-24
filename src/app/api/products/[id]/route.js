import dbConnect from "@/config/connectDB";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
      await dbConnect();
  
      const { id } = await params; // Extract the product ID from the URL params
      if (!id) {
        return NextResponse.json(
          { message: "Product ID is required" },
          { status: 400 }
        );
      }
  
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return NextResponse.json(
          { message: "Product not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: "Product deleted successfully", product: deletedProduct },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting product:", error);
      return NextResponse.json(
        { message: "Error deleting product" },
        { status: 500 }
      );
    }
  }

  