import { headers } from "next/headers";
import { Webhook } from "svix";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const payload = await req.text();
  const headerList = headers();
  const svix_id = headerList.get("svix-id");
  const svix_timestamp = headerList.get("svix-timestamp");
  const svix_signature = headerList.get("svix-signature");

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    return new Response("Error verifying webhook", { status: 400 });
  }

  if (evt.type === "user.created") {
    const { id, email_addresses, first_name, last_name } = evt.data;

    await supabase.from("Uniflowstudents").insert([
      {
        clerk_id: id,
        email: email_addresses[0].email_address,
        first_name,
        last_name,
      },
    ]);
  }

  return new Response("Webhook received", { status: 200 });
}