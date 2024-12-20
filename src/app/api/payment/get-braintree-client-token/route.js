import { gateway } from "@/config/braintree";

export async function GET() {
  try {
    const res = await gateway.clientToken.generate({});
    return Response.json({ clientToken: res.clientToken }, { status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: 'Error generating braintree client token' },
      { status: 500 }
    );
  }
}