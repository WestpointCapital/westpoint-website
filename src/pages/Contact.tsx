import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { sendContactForm, ContactFormData } from '../utils/emailService';
import Notification from '../components/ui/notification';

const Contact = () => {
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
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get in <span className="text-blue-400">Touch</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                Ready to transform your business? Let's discuss how our solutions can drive your enterprise forward. 
                Our experts are ready to understand your challenges and design the perfect solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                  Let's start a <span className="text-blue-400">conversation</span>
                </h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Whether you're looking to automate your processes, build custom software, 
                  or scale your marketing efforts, we're here to help you succeed.
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
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 glass-container rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Our Offices</div>
                      <div className="text-white/70">Tallinn, Estonia</div>
                      <div className="text-white/70">Vejle, Denmark</div>
                      <div className="text-white/70">Phuket, Thailand</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 glass-container rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Business Hours</div>
                      <div className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM</div>
                      <div className="text-white/70">CET (Central European Time)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">First Name</label>
                      <Input 
                        name="firstName" 
                        placeholder="John" 
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Last Name</label>
                      <Input 
                        name="lastName" 
                        placeholder="Doe" 
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50" 
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Company Name</label>
                    <Input 
                      name="company" 
                      placeholder="Your Company" 
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your project and how we can help..."
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-white/50 min-h-[120px]"
                      required
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
        </section>
      </main>
      
      <Footer />
      
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
};

export default Contact;

