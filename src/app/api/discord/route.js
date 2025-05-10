import axios from "axios";

export async function POST(req) {
  const { userName, productName, price,email } = await req.json();

  const message = {
    content: `🎉 **New Purchase!**\n\n**User:** ${userName}\n**Product:** ${productName}\n**Price:** $${price}\n**Email ${email}`,
  };

  try {
    await axios.post(process.env.DISCORD_HOOK , message);
    return new Response(
      JSON.stringify(
        { success: true, message: "Notification sent to Discord!" },
        {
          status: 200,
        }
      )
    );
  } catch (error) {
    console.error("Error sending Discord notification:", error);
    return new Response(
      JSON.stringify(
        { success: false, message: "Failed to send notification" },
        {
          status: 500,
        }
      )
    );
  }
}
