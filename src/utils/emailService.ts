// Email service configuration
// You'll need to set up EmailJS account and get these credentials

export const EMAIL_CONFIG = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: 'service_westpoint', // Your EmailJS service ID
  TEMPLATE_ID: 'template_contact', // Your EmailJS template ID
  PUBLIC_KEY: 'your_public_key_here', // Your EmailJS public key
  TO_EMAIL: 'contact@westpoint.capital' // Your email address
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

// Simple email service - for now using a working approach
export const sendContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    // For now, we'll simulate success and show the data in console
    // In production, you would integrate with a real email service
    console.log('Contact Form Data:', data);
    
    // Create a mailto link as fallback
    const subject = encodeURIComponent(`Contact Form Submission from ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(`
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}

Message:
${data.message}
    `);
    
    // Show success message and open email client
    alert('Form submitted successfully! Your email client will open to send the message.');
    window.location.href = `mailto:contact@westpoint.capital?subject=${subject}&body=${body}`;
    
    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
};

export const sendPartnershipForm = async (data: PartnershipFormData): Promise<boolean> => {
  try {
    // For now, we'll simulate success and show the data in console
    // In production, you would integrate with a real email service
    console.log('Partnership Form Data:', data);
    
    // Create a mailto link as fallback
    const subject = encodeURIComponent(`Partnership Application from ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(`
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}
Partnership Type: ${data.partnershipType}

Message:
${data.message}
    `);
    
    // Show success message and open email client
    alert('Application submitted successfully! Your email client will open to send the message.');
    window.location.href = `mailto:contact@westpoint.capital?subject=${subject}&body=${body}`;
    
    return true;
  } catch (error) {
    console.error('Error sending partnership form:', error);
    return false;
  }
};
