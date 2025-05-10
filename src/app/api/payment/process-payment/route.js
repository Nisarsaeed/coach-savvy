import { gateway } from "@/config/braintree";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { nonce, totalPrice } = await request.json();

  // Validate data
  if (!nonce || !totalPrice) {
    console.log("Nonce, id or quantity is missing");
    return Response.json(
      { message: "Nonce, id or quantity is missing" },
      { status: 400 }
    );
  }

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
