import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="pt-20">
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-blue-400">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy <span className="text-blue-400">Policy</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-white/50 mt-4">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="glass-container rounded-2xl p-8 md:p-12 bg-slate-900/50 border border-blue-500/20 max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  Westpoint Capital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-white/80 leading-relaxed">
                  By using our website or services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-blue-400 mb-3">2.1 Personal Information</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Business requirements and project details</li>
                  <li>Communication preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc list-inside text-white/80 leading-relaxed space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-white/80 leading-relaxed space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process partnership applications and business inquiries</li>
                  <li>Communicate with you about our services and updates</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-white/80 leading-relaxed space-y-2">
                  <li>With your explicit consent</li>
                  <li>With service providers who assist us in operating our business</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
                <p className="text-white/80 leading-relaxed">
                  We use industry-standard encryption and security protocols to safeguard your data.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside text-white/80 leading-relaxed space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality and performance</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
                <p className="text-white/80 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-white/80 leading-relaxed space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Restrict or object to certain processing activities</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-white/80 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                <p className="text-white/80 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              {/* International Transfers */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
                <p className="text-white/80 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
                <p className="text-white/80 leading-relaxed">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-white/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
                  <p className="text-white/80 leading-relaxed">
                    <strong className="text-white">Westpoint Capital</strong><br />
                    Email: <a href="mailto:hello@goauto.ai" className="text-blue-400 hover:text-blue-300">hello@goauto.ai</a><br />
                    Phone: <a href="tel:+17439026451" className="text-blue-400 hover:text-blue-300">+1 (743) 902-6451</a><br />
                    <br />
                    <strong className="text-white">Headquarters:</strong><br />
                    Tallinn, Estonia<br />
                    <br />
                    <strong className="text-white">Additional Offices:</strong><br />
                    Vejle, Denmark<br />
                    Phuket, Thailand
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
