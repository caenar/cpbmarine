import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    await resend.emails.send({
      from: "CBP MARINE <info@cbpmarine.com>",
      to: ["kaiserlaconfiture@gmail.com", "diverconz@gmail.com"],
      subject: "NEW FORM SUBMISSION | CBP MARINE",
      html: `
    <table cellpadding="0" cellspacing="0" width="100%" style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
      <tr>
        <td align="center">
          <table cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px;">
            <tr>
              <td>
                <h2 style="color: #0f172a; margin: 0 0 16px;">New Contact Form Submission</h2>

                <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
                <p style="margin: 0 0 24px; white-space: pre-line;">${message}</p>

                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

                <p style="font-size: 14px; color: #475569; margin: 0;">
                  CBP Marine Services <br />
                  <a href="https://cbpmarine.com" style="color: #0284c7; text-decoration: none;">www.cbpmarine.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
