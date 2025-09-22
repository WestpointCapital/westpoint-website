// API endpoints for email sending
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const EMAIL_CONFIG = {
  FROM_EMAIL: import.meta.env.VITE_DEFAULT_FROM_EMAIL || 'noreply@westpoint.capital',
  FROM_NAME: import.meta.env.VITE_DEFAULT_FROM_NAME || 'Westpoint Form',
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

// Send contact form via Vercel API
export const sendContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    console.log('Sending contact form via API...');
    
    const response = await fetch(`${API_BASE_URL}/api/send-contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { error: `HTTP ${response.status}: ${response.statusText}` };
      }
      console.error('API error:', errorData);
      return false;
    }

    let result;
    try {
      result = await response.json();
    } catch (e) {
      console.error('Failed to parse response as JSON:', e);
      return false;
    }
    
    console.log('Contact form sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
};

// Send partnership form via Vercel API
export const sendPartnershipForm = async (data: PartnershipFormData): Promise<boolean> => {
  try {
    console.log('Sending partnership form via API...');
    
    const response = await fetch(`${API_BASE_URL}/api/send-partnership`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { error: `HTTP ${response.status}: ${response.statusText}` };
      }
      console.error('API error:', errorData);
      return false;
    }

    let result;
    try {
      result = await response.json();
    } catch (e) {
      console.error('Failed to parse response as JSON:', e);
      return false;
    }
    
    console.log('Partnership form sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending partnership form:', error);
    return false;
  }
};
