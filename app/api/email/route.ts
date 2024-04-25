import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
    req: Request
) {

    const data = await req.json();

  try {
    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ['cizawells70@gmail.com'],
      subject: data.subject,
      html: `<div>
      <p>${data.message}</p>
      </div>`
    });

    return Response.json(response);
  }catch (error) {
    return Response.json({ error });
  }
}
