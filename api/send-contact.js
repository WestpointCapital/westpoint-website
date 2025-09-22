import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, company, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailContent = `
New contact form submission from the website:

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

---
This email was sent from the Westpoint website contact form.
    `;

    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME || 'Westpoint Form'} <${process.env.FROM_EMAIL || 'noreply@westpoint.capital'}>`,
      to: [process.env.TO_EMAIL || 'contact@westpoint.capital'],
      subject: process.env.EMAIL_SUBJECT || 'Website Form Submission',
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Westpoint website contact form.
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending contact form:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
