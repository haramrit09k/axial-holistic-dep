import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { name, phone, email, message } = await request.json();

  if (!name || !phone) {
    return Response.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const clinicEmail = process.env.CONTACT_EMAIL ?? "dr.parmar@axialholistic.com";
  const fromAddress = "Axial Holistic Depression Clinic <onboarding@resend.dev>";

  // Notify Dr. Parmar
  const { error: clinicError } = await resend.emails.send({
    from: fromAddress,
    to: clinicEmail,
    subject: `New patient inquiry from ${name}`,
    text: [
      `You have a new appointment request from your website.`,
      ``,
      `Name:    ${name}`,
      `Phone:   ${phone}`,
      `Email:   ${email || "not provided"}`,
      `Message: ${message || "—"}`,
      ``,
      `Please call them at your earliest convenience.`,
    ].join("\n"),
  });

  if (clinicError) {
    console.error("Resend error (clinic):", clinicError);
    return Response.json({ error: "Failed to send. Please call us directly." }, { status: 500 });
  }

  // Send patient confirmation if they gave an email
  if (email) {
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "We received your message — Axial Holistic Depression Clinic",
      text: [
        `Hi ${name},`,
        ``,
        `Thank you for reaching out to Axial Holistic Depression Clinic.`,
        `Dr. Parmar's team has received your request and will call you at ${phone} within one business day.`,
        ``,
        `While you wait, a few things that may help:`,
        ``,
        `1. Track your mood. Even a simple note each morning — "today I feel ___ out of 10" — gives Dr. Parmar`,
        `   a clearer picture of what you've been experiencing and helps your first appointment go further.`,
        ``,
        `2. Write down what you've already tried. List any medications, therapists, or treatments`,
        `   you've had in the past, and what you felt about each. This saves time and avoids repeating`,
        `   things that haven't worked for you.`,
        ``,
        `3. Note your biggest daily challenges. Whether it's sleep, motivation, concentration, or`,
        `   relationships — jot down the two or three things that affect your life the most right now.`,
        ``,
        `4. Be patient with yourself. Reaching out is the hardest step, and you've already taken it.`,
        ``,
        `If you have any questions before your appointment, you're welcome to reply to this email`,
        `or call the clinic directly.`,
        ``,
        `Looking forward to meeting you,`,
        `Dr. Ankit Parmar & the Axial Holistic Team`,
      ].join("\n"),
    });
  }

  return Response.json({ ok: true });
}
