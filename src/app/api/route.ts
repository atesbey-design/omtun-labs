import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';




export async function POST(req: NextRequest) {
    const requestBody = await req.json(); 
    console.log(requestBody);
    const { name, email, subject, message } = requestBody;
    

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT as string, 10),
        secure: true,  // TLS için false olmalı
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,  // Eğer kendi sertifikalı bir sunucu kullanıyorsanız bu gerekli olabilir
        },
    });
    


    const mailOptions = {
        from: email,
        to: process.env.EMAIL_TO,
        subject: `Contact Form Submission: ${subject}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);  // Hata mesajını konsola yazdırıyoruz
        return NextResponse.json({ message: 'Failed to send email', error: String(error) });
    }
    
}
