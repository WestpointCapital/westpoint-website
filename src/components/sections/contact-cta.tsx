import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { PhoneInput } from '../ui/phone-input';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { sendContactForm, ContactFormData } from '../../utils/emailService';
import Notification from '../ui/notification';

const ContactCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({
    message: '',
    type: 'success',
    isVisible: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    };

    try {
      const success = await sendContactForm(data);
      
      if (success) {
        setIsSubmitted(true);
        setNotification({
          message: 'Form submitted successfully!',
          type: 'success',
          isVisible: true
        });
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          (e.target as HTMLFormElement).reset();
        }, 3000);
      } else {
        setNotification({
          message: 'Failed to send message. Please try again.',
          type: 'error',
          isVisible: true
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setNotification({
        message: 'Failed to send message. Please try again.',
        type: 'error',
        isVisible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            {/* Contact Badge */}
            <div className="inline-flex items-center gap-2 glass-container rounded-full px-4 py-2 mb-8">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Contact</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to transform <span className="text-blue-400">your business?</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Let's discuss how our solutions can drive your enterprise forward. 
              Our experts are ready to understand your challenges and design the perfect solution.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-container rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email Us</div>
                  <div className="text-white/70">contact@westpoint.capital</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-container rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Call Us</div>
                  <div className="text-white/70">+1 (743) 902-6451</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">First Name</label>
                  <Input name="firstName" placeholder="John" className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Last Name</label>
                  <Input name="lastName" placeholder="Doe" className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Company Email</label>
                <Input name="email" type="email" placeholder="john@company.com" className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Phone Number (Optional)</label>
                <PhoneInput 
                  name="phone" 
                  placeholder="Enter your phone number"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Company Name</label>
                <Input name="company" placeholder="Your Company" className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Project Details</label>
                <Textarea 
                  name="message"
                  placeholder="Tell us about your requirements and challenges..."
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50 min-h-[120px]"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="hero-button w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                {!isSubmitting && !isSubmitted && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />
    </section>
  );
};

export default ContactCTA;