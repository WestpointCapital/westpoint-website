import { sendContactForm, sendPartnershipForm } from './emailService';

// Test function to verify Resend integration
export const testEmailIntegration = async () => {
  console.log('Testing email integration...');
  
  // Test contact form
  const contactData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    company: 'Test Company',
    message: 'This is a test message from the website integration.'
  };

  try {
    const contactResult = await sendContactForm(contactData);
    console.log('Contact form test result:', contactResult);
  } catch (error) {
    console.error('Contact form test error:', error);
  }

  // Test partnership form
  const partnershipData = {
    firstName: 'Test',
    lastName: 'Partner',
    email: 'partner@example.com',
    company: 'Partner Company',
    partnershipType: 'Technology Partner',
    message: 'This is a test partnership application.'
  };

  try {
    const partnershipResult = await sendPartnershipForm(partnershipData);
    console.log('Partnership form test result:', partnershipResult);
  } catch (error) {
    console.error('Partnership form test error:', error);
  }
};

// Uncomment the line below to run the test
// testEmailIntegration();
