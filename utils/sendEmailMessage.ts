import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmailMessage = async(
    email: string,
    name:string,
    subject: string,
    message: string
) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: subject,
        html: `<div>
        <p>Email from ${name}</p>
        <p>${message}</p>
        </div>`
   })
}
