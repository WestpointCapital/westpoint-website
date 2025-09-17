import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="py-24">
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms & <span className="text-blue-400">Conditions</span>
              </h1>
              <p className="text-xl text-white/70">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>

            {/* Terms Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700/50">
                <div className="text-white space-y-8">
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Parties</h2>
                    <p className="text-white/80 leading-relaxed">
                      <strong className="text-blue-400">Westpoint Capital</strong> ("Service Provider")<br />
                      <strong className="text-blue-400">Client</strong> ("Client")
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Scope of Services</h2>
                    <p className="text-white/80 leading-relaxed">
                      Westpoint Capital provides financial, technological, and consulting services, which may include but are not limited to software solutions, advisory services, marketing technology, automation tools, and related support ("Services"). All Services provided are subject to the terms set forth in this Agreement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Client Responsibility</h2>
                    <p className="text-white/80 leading-relaxed">
                      The Client acknowledges and agrees that they bear full and exclusive responsibility for ensuring all information, data, and content used with the Services are accurate, lawful, and compliant. The Client is responsible for obtaining and maintaining all necessary consents, licenses, and authorizations required to use the Services in their region. The Client must conduct their own due diligence to ensure compliance with applicable regional, national, and international laws and regulations. The Client is solely responsible for approving and authorizing all content or material distributed through the Services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Service Provider Role</h2>
                    <p className="text-white/80 leading-relaxed">
                      Westpoint Capital acts solely as a technical facilitator and service provider. Westpoint Capital does not review, edit, or approve Client content. Westpoint Capital does not validate or verify Client data, lists, or permissions. Westpoint Capital does not assume any responsibility for compliance with local or international regulations on behalf of the Client.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Platform Use and Misuse</h2>
                    <p className="text-white/80 leading-relaxed">
                      Westpoint Capital provides a platform that enables Clients to use third-party resources, including phone numbers and communication channels. Westpoint Capital is not the provider or owner of the phone numbers used within the platform. Any misuse of the platform, including but not limited to violations of applicable laws, regulations, or malicious intent, is solely the responsibility of the Client. If Westpoint Capital identifies suspicious or unlawful activity, the Client's account may be suspended or terminated immediately without refund, and reported to authorities.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Allocation of Risk & Liability</h2>
                    <p className="text-white/80 leading-relaxed">
                      The Client expressly agrees that all responsibility, risk, and liability for the use of Westpoint Capital's Services rests 100% with the Client. This includes, without limitation, claims, complaints, or disputes arising from the Client's use of the Services, regulatory investigations, penalties, or fines, and any lawsuits or legal actions brought in connection with the Client's use of the Services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Indemnification</h2>
                    <p className="text-white/80 leading-relaxed">
                      The Client shall indemnify, defend, and hold harmless Westpoint Capital, its employees, directors, contractors, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from the Client's use of the Services, the Client's content, data, or communications, and any breach of laws, rules, or regulations by the Client.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Fees & Payment</h2>
                    <p className="text-white/80 leading-relaxed">
                      All fees are due in accordance with the payment terms specified in the applicable invoice or service order. All fees are strictly non-refundable, regardless of service usage, results, or termination. Services may be suspended in case of non-payment.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                    <p className="text-white/80 leading-relaxed">
                      Under no circumstances shall Westpoint Capital be liable for direct, indirect, incidental, or consequential damages resulting from the Services. The maximum liability of Westpoint Capital shall be strictly limited to the total fees paid by the Client for Services under this Agreement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Compliance Disclaimer</h2>
                    <p className="text-white/80 leading-relaxed">
                      Westpoint Capital will make commercially reasonable efforts to remain compliant with applicable regulations in its own jurisdiction. However, it is solely the Client's responsibility to ensure their own compliance with regional, national, and international laws, including but not limited to financial, data protection, consumer, or marketing regulations.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law & Jurisdiction</h2>
                    <p className="text-white/80 leading-relaxed">
                      This Agreement shall be governed by the laws of Denmark. The parties agree that the courts of Denmark shall have exclusive jurisdiction over any disputes arising under this Agreement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">11. Term & Termination</h2>
                    <p className="text-white/80 leading-relaxed">
                      This Agreement remains in effect until terminated by either party. Termination does not relieve the Client of any responsibilities or liabilities incurred prior to termination.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">12. Acceptance</h2>
                    <p className="text-white/80 leading-relaxed">
                      By using or engaging in Services provided by Westpoint Capital, the Client confirms their understanding and acceptance of these Terms & Conditions.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 text-center">
              <div className="bg-slate-900/30 rounded-xl p-8 border border-slate-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Questions about these Terms?</h3>
                <p className="text-white/70 mb-6">
                  If you have any questions about these Terms & Conditions, please contact us.
                </p>
                <a 
                  href="mailto:contact@westpoint.capital" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
