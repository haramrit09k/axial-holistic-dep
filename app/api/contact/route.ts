import { NextRequest } from "next/server";

const BASE = `
  background:#fffbf5;
  font-family:Georgia,'Times New Roman',serif;
  margin:0;padding:0;
`;

function wrapper(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="${BASE}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbf5;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#92400e,#b45309);padding:36px 40px;text-align:center;">
            <p style="margin:0 0 4px;color:#fcd34d;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;font-family:Arial,sans-serif;">Axial Holistic Depression Clinic</p>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:normal;font-family:Georgia,serif;letter-spacing:0.02em;">Holistic Care for Chronic Depression</h1>
          </td>
        </tr>

        <!-- Body -->
        ${content}

        <!-- Footer -->
        <tr>
          <td style="background:#1c1412;padding:28px 40px;text-align:center;">
            <p style="margin:0 0 6px;color:#a8896a;font-size:12px;font-family:Arial,sans-serif;">Axial Holistic Depression Clinic</p>
            <p style="margin:0 0 4px;color:#6b5344;font-size:11px;font-family:Arial,sans-serif;">1001 N. Goliad St, Bldg B, Rockwall, TX 75087</p>
            <p style="margin:0;color:#6b5344;font-size:11px;font-family:Arial,sans-serif;">Phone: 972-478-0152 &nbsp;·&nbsp; Fax: 659-901-1257</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function calendarUrl(name: string, phone: string, email: string) {
  // Schedule for tomorrow 9am–9:30am Central (UTC-5)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setUTCHours(14, 0, 0, 0);
  const end = new Date(tomorrow);
  end.setUTCMinutes(30);
  const fmt = (d: Date) => d.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
  const text = encodeURIComponent(`Call ${name} — New Patient`);
  const details = encodeURIComponent(`Phone: ${phone}\nEmail: ${email || "not provided"}\n\nNew patient inquiry from Axial Holistic Depression Clinic website.`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&dates=${fmt(tomorrow)}/${fmt(end)}`;
}

function clinicHtml(name: string, phone: string, email: string, message: string) {
  const telLink = `tel:+1${phone.replace(/\D/g, "")}`;
  const gcalLink = calendarUrl(name, phone, email);
  return wrapper(`
    <tr>
      <td style="padding:36px 40px 28px;">
        <p style="margin:0 0 8px;color:#b45309;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;font-family:Arial,sans-serif;">New Appointment Request</p>
        <h2 style="margin:0 0 24px;color:#1c1412;font-size:20px;font-weight:normal;font-family:Georgia,serif;">You have a new patient inquiry</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbf5;border-radius:12px;border:1px solid #fde68a;overflow:hidden;">
          ${row("Name", name)}
          ${row("Phone", phone)}
          ${row("Email", email || "Not provided")}
          ${row("Message", message || "—", true)}
        </table>

        <!-- Action buttons -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
          <tr>
            <td width="48%" style="padding-right:8px;">
              <a href="${telLink}" style="display:block;background:#b45309;color:#ffffff;text-align:center;padding:14px 20px;border-radius:10px;font-size:15px;font-family:Arial,sans-serif;font-weight:bold;text-decoration:none;">
                📞 Call ${name}
              </a>
            </td>
            <td width="48%" style="padding-left:8px;">
              <a href="${gcalLink}" style="display:block;background:#fffbf5;color:#92400e;text-align:center;padding:14px 20px;border-radius:10px;font-size:15px;font-family:Arial,sans-serif;font-weight:bold;text-decoration:none;border:2px solid #fcd34d;">
                📅 Add to Calendar
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `);
}

function row(label: string, value: string, last = false) {
  return `<tr>
    <td style="padding:14px 20px;border-bottom:${last ? "none" : "1px solid #fde68a"};">
      <span style="display:block;color:#92400e;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;font-family:Arial,sans-serif;margin-bottom:2px;">${label}</span>
      <span style="color:#1c1412;font-size:15px;font-family:Arial,sans-serif;">${value}</span>
    </td>
  </tr>`;
}

function tip(num: string, heading: string, body: string) {
  return `
    <tr>
      <td style="padding:0 0 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbf5;border-radius:10px;border:1px solid #fde68a;overflow:hidden;">
          <tr>
            <td width="48" style="background:#b45309;padding:14px 0;text-align:center;vertical-align:top;">
              <span style="color:#fcd34d;font-size:18px;font-weight:bold;font-family:Georgia,serif;">${num}</span>
            </td>
            <td style="padding:14px 18px;">
              <p style="margin:0 0 4px;color:#92400e;font-size:13px;font-weight:bold;font-family:Arial,sans-serif;">${heading}</p>
              <p style="margin:0;color:#57534e;font-size:13px;line-height:1.6;font-family:Arial,sans-serif;">${body}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function patientHtml(name: string, phone: string) {
  return wrapper(`
    <tr>
      <td style="padding:36px 40px 8px;">
        <h2 style="margin:0 0 12px;color:#1c1412;font-size:22px;font-weight:normal;font-family:Georgia,serif;">Hi ${name},</h2>
        <p style="margin:0 0 24px;color:#57534e;font-size:15px;line-height:1.7;font-family:Arial,sans-serif;">
          Thank you for reaching out. Dr. Parmar's team has received your request and will call you at <strong style="color:#1c1412;">${phone}</strong> within one business day.
        </p>
        <p style="margin:0 0 20px;color:#92400e;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;font-family:Arial,sans-serif;">While you wait, a few things that may help</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${tip("1", "Track your mood", "A simple note each morning — \"today I feel ___ out of 10\" — gives Dr. Parmar a clearer picture and helps your first appointment go further.")}
          ${tip("2", "Write down what you've already tried", "List any medications, therapists, or treatments from the past and what you felt about each. This saves time and avoids repeating things that haven't worked.")}
          ${tip("3", "Note your biggest daily challenges", "Whether it's sleep, motivation, concentration, or relationships — jot down the two or three things that affect your life the most right now.")}
          ${tip("4", "Be patient with yourself", "Reaching out is the hardest step, and you've already taken it.")}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 40px 36px;">
        <p style="margin:0 0 4px;color:#57534e;font-size:14px;font-family:Arial,sans-serif;">Looking forward to meeting you,</p>
        <p style="margin:0;color:#92400e;font-size:15px;font-family:Georgia,serif;font-style:italic;">Dr. Ankit Parmar &amp; the Axial Holistic Team</p>
      </td>
    </tr>
  `);
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set");
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const { name, phone, email, message } = await request.json();

  if (!name || !phone) {
    return Response.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const clinicEmail = process.env.CONTACT_EMAIL ?? "practice@axialtms.com";
  const fromEmail = process.env.FROM_EMAIL ?? "noreply@holisticdepression.com";
  const fromName = "Axial Holistic Depression Clinic";

  const headers = {
    "api-key": apiKey,
    "Content-Type": "application/json",
  };

  // Notify clinic
  const clinicRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers,
    body: JSON.stringify({
      sender: { name: fromName, email: fromEmail },
      to: [{ email: clinicEmail }],
      subject: `New patient inquiry from ${name}`,
      htmlContent: clinicHtml(name, phone, email, message),
    }),
  });

  if (!clinicRes.ok) {
    const err = await clinicRes.text();
    console.error("Brevo error (clinic):", err);
    return Response.json({ error: "Failed to send. Please call us directly." }, { status: 500 });
  }

  // Send patient confirmation if they gave an email
  if (email) {
    const patientRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers,
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email, name }],
        subject: "We received your message — Axial Holistic Depression Clinic",
        htmlContent: patientHtml(name, phone),
      }),
    });

    if (!patientRes.ok) {
      const err = await patientRes.text();
      console.error("Brevo error (patient confirmation):", err);
    }
  }

  return Response.json({ ok: true });
}
