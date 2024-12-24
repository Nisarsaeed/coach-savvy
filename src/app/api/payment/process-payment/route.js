import { gateway } from "@/config/braintree";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { nonce, quantity } = await request.json();

  // Validate data
  if (!nonce || !quantity) {
    console.log("Nonce, id or quantity is missing");
    return Response.json(
      { message: "Nonce, id or quantity is missing" },
      { status: 400 }
    );
  }

  // Get item from the database
  const item = {
    id: 10000,
    price: 10,
  };
  const totalPrice = item.price * quantity;

  try {
    // Create payment
    const payment = await gateway.transaction.sale({
      amount: totalPrice.toFixed(2),
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true,
      },
    });
    console.log("payment ===== ", payment.success);
    if (!payment.success) {
      throw new Error("Payment Failed");
    }
    return NextResponse.json(
      { message: "Checkout successful", success: payment.success },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Failed to checkout" },
      { status: 500 }
    );
  }
}
