import { v4 as uuidv4 } from "uuid";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    const id = uuidv4();
    const received = new Date().toLocaleString();
    const gasApiUrl = process.env.GAS_API_URL;

    // Prepare payload for Google Apps Script
    const payload = { id, name, email, message, received };

    // Send POST request to Google Apps Script
    const gasRes = await fetch(gasApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!gasRes.ok) {
      throw new Error("Failed to post to Google Apps Script");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
} 