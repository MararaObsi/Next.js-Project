import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase.from("Uniflowstudents").select("*").order("created_at", { ascending: true });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("students")
    .insert([
      {
        name: body.name,
        email: body.email,
        department: body.department,
        year: Number(body.year),
        clerk_user_id: body.clerk_user_id || null,
      },
    ])
    .select()
    .single();

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify(data), { status: 201 });
}

export async function DELETE(request) {
  const { id } = await request.json();

  const { error } = await supabase.from("students").delete().eq("id", id);

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify({ message: "Student deleted successfully" }));
}

export async function PUT(request) {
  const body = await request.json();
  const { id, name, email, department, year } = body;

  const { data, error } = await supabase
    .from("students")
    .update({ name, email, department, year })
    .eq("id", id)
    .select()
    .single();

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify(data));
}