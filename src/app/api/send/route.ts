import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    const data = await resend.emails.send({
      from: 'GaiaLabs <contacto@gaialabs.es>',
      to: ['info@gaialabs.es'],
      subject: `Nuevo mensaje de: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }
}