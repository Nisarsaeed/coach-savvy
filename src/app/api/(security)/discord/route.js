import axios from "axios";

export async function POST(req) {
  const { username, productName, price } = await req.json();

  const message = {
    content: `🎉 **New Purchase!**\n\n**User:** ${username}\n**Product:** ${productName}\n**Price:** $${price}`,
  };

  try {
    await axios.post(DISCORD_HOOK, message);
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
