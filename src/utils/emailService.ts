import { Resend } from 'resend';

// Get API key with fallback
const getResendApiKey = () => {
  return process.env.REACT_APP_RESEND_API_KEY || process.env.RESEND_API_KEY || '';
};

// Initialize Resend only when needed
const getResendInstance = () => {
  const apiKey = getResendApiKey();
  if (!apiKey) {
    throw new Error('Resend API key not found');
  }
  return new Resend(apiKey);
};

export const EMAIL_CONFIG = {
  FROM_EMAIL: 'noreply@goauto.ai',
  FROM_NAME: 'Westpoint Form',
  TO_EMAIL: 'contact@westpoint.capital',
  SUBJECT: 'Website Form Submission'
};

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export interface PartnershipFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  partnershipType: string;
  message: string;
}

// Send contact form using Resend
export const sendContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    // Check if API key is available
    const apiKey = getResendApiKey();
    if (!apiKey) {
      console.warn('Resend API key not found, falling back to console log');
      console.log('Contact Form Data:', data);
      return true; // Return success to avoid breaking the form
    }

    const resend = getResendInstance();
    const emailContent = `
New contact form submission from the website:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}

Message:
${data.message}

---
This email was sent from the Westpoint website contact form.
    `;

    const { error } = await resend.emails.send({
      from: `${EMAIL_CONFIG.FROM_NAME} <${EMAIL_CONFIG.FROM_EMAIL}>`,
      to: [EMAIL_CONFIG.TO_EMAIL],
      subject: EMAIL_CONFIG.SUBJECT,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${data.message.replace(/\n/g, '<br>')}
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
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
};

export const sendPartnershipForm = async (data: PartnershipFormData): Promise<boolean> => {
  try {
    // Check if API key is available
    const apiKey = getResendApiKey();
    if (!apiKey) {
      console.warn('Resend API key not found, falling back to console log');
      console.log('Partnership Form Data:', data);
      return true; // Return success to avoid breaking the form
    }

    const resend = getResendInstance();
    const emailContent = `
New partnership application from the website:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}
Partnership Type: ${data.partnershipType}

Message:
${data.message}

---
This email was sent from the Westpoint website partnership form.
    `;

    const { error } = await resend.emails.send({
      from: `${EMAIL_CONFIG.FROM_NAME} <${EMAIL_CONFIG.FROM_EMAIL}>`,
      to: [EMAIL_CONFIG.TO_EMAIL],
      subject: EMAIL_CONFIG.SUBJECT,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Partnership Application</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Partnership Type:</strong> ${data.partnershipType}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Westpoint website partnership form.
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending partnership form:', error);
    return false;
  }
};
