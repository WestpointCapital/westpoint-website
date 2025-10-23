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
                  
                  {/* Header Information */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Terms & Conditions</h2>
                    <div className="text-white/80 space-y-2">
                      <p><strong className="text-blue-400">Effective Date:</strong> 20 Oct 2025</p>
                      <p><strong className="text-blue-400">Company:</strong> Westpoint Capital OÜ</p>
                      <p><strong className="text-blue-400">Registry Code:</strong> 16942224</p>
                      <p><strong className="text-blue-400">Registered Address:</strong> Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551, Estonia</p>
                      <p><strong className="text-blue-400">Email:</strong> <a href="mailto:contact@westpoint.capital" className="text-blue-400 hover:text-blue-300">contact@westpoint.capital</a></p>
                      <p><strong className="text-blue-400">Website:</strong> <a href="https://www.westpointcapital.co" className="text-blue-400 hover:text-blue-300">www.westpointcapital.co</a></p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Parties</h2>
                    <p className="text-white/80 leading-relaxed">
                      These Terms & Conditions ("Agreement") are entered into between Westpoint Capital OÜ ("Service Provider") and the Client ("Client"). By purchasing, subscribing to, or using any Services provided by Westpoint Capital OÜ, the Client agrees to be bound by the terms herein.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Scope of Services</h2>
                    <p className="text-white/80 leading-relaxed">
                      Westpoint Capital OÜ provides software-as-a-service (SaaS) solutions, automation tools, chatbot technology, marketing systems, AI integrations, consulting, and related support ("Services"). The Services may include access to digital products and online platforms for business automation, communication, and analytics. All Services provided are subject to this Agreement and the applicable service order or subscription plan.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Digital Products & Chatbot Services</h2>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Westpoint Capital offers certain Services as digital products or software delivered online. These may include chatbot systems, automation flows, and digital integrations that can interact with third-party applications.
                    </p>
                    <p className="text-white/80 leading-relaxed mb-4">
                      The chatbot and automation systems are designed to facilitate communication, lead generation, and customer service. The Client acknowledges that:
                    </p>
                    <ul className="text-white/80 leading-relaxed ml-6 space-y-2">
                      <li>• The chatbot operates automatically and may collect, store, or process user data provided through its interface.</li>
                      <li>• The Client is responsible for configuring and supervising chatbot interactions, ensuring compliance with all data-protection and consumer-communication laws.</li>
                      <li>• Westpoint Capital does not monitor or control specific chatbot content, customer interactions, or data transmitted by the Client's users.</li>
                      <li>• The Client must obtain any required consent for automated messaging, data collection, or marketing communication conducted through the chatbot.</li>
                    </ul>
                    <p className="text-white/80 leading-relaxed mt-4">
                      Digital products are delivered immediately after purchase or activation. Because of the instant access and digital nature of the Services, no refunds are offered once access has been provided.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Client Responsibility</h2>
                    <p className="text-white/80 leading-relaxed">
                      The Client bears full responsibility for ensuring that all information, data, and content used within the Services are accurate, lawful, and compliant with applicable regulations. The Client must obtain all necessary consents, licenses, and authorizations to use the Services, ensure that communications and data handling through the chatbot or other platforms comply with the EU General Data Protection Regulation (GDPR), the Estonian Consumer Protection Act, and other relevant national or international laws, and conduct due diligence regarding compliance, advertising standards, and customer communication practices.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Service Provider Role</h2>
                    <p className="text-white/80 leading-relaxed">
                      Westpoint Capital acts solely as a technical facilitator. The company does not edit, validate, or approve Client content, nor is it responsible for the legal compliance of the Client's use of the Services. Westpoint Capital provides the infrastructure, hosting, and technical support for the digital tools offered.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Platform Use and Misuse</h2>
                    <p className="text-white/80 leading-relaxed">
                      The Client may not use the Services in a manner that violates any applicable law or regulation. This includes spam, harassment, fraud, or data misuse. If unlawful or suspicious activity is detected, Westpoint Capital may immediately suspend or terminate access without refund and may report such activity to authorities. The Client agrees not to use the Services to send unsolicited or misleading messages, interfere with or disrupt other users' systems, or reverse engineer or misuse the underlying code of the chatbot or platform.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Fees & Payment</h2>
                    <p className="text-white/80 leading-relaxed mb-4">
                      All fees are payable as outlined in the applicable invoice or subscription plan. Digital product access or subscription activation occurs only upon full payment. In case of non-payment, Services may be suspended or permanently terminated.
                    </p>
                    <p className="text-white/80 leading-relaxed mb-4">
                      <strong className="text-blue-400">7-Day Money-Back Guarantee:</strong> For chatbot services and digital products, Westpoint Capital offers a 7-day money-back guarantee from the date of service activation. If the Client is not satisfied with the chatbot service within the first 7 days of activation, they may request a full refund by contacting support at <a href="mailto:contact@westpoint.capital" className="text-blue-400 hover:text-blue-300">contact@westpoint.capital</a>. Refund requests must be submitted within the 7-day period and will be processed within 5-10 business days. This guarantee applies only to the initial subscription period and does not extend to subsequent billing cycles.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      <strong className="text-blue-400">Cancellation Policy:</strong> Clients may cancel their chatbot subscription at any time through their account dashboard or by contacting support. Cancellation will take effect at the end of the current billing period. No partial refunds will be provided for unused portions of the billing period, except as outlined in the 7-day money-back guarantee above.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Allocation of Risk & Limitation of Liability</h2>
                    <p className="text-white/80 leading-relaxed">
                      All risks associated with the use of the Services rest solely with the Client. Under no circumstances shall Westpoint Capital be liable for any indirect, incidental, or consequential damages arising from use or inability to use the Services. The maximum liability of Westpoint Capital shall not exceed the total fees paid by the Client within the past 12 months.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
                    <p className="text-white/80 leading-relaxed">
                      The Client shall indemnify and hold harmless Westpoint Capital, its directors, employees, and affiliates from any claims, damages, or losses arising from the Client's use of the Services, any breach of law, regulation, or third-party rights, or data or content transmitted through the chatbot or automation systems.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Data Protection & Privacy</h2>
                    <p className="text-white/80 leading-relaxed">
                      Westpoint Capital processes personal data in accordance with the EU General Data Protection Regulation (GDPR) and Estonian Data Protection Inspectorate guidelines. The Client remains the data controller for end-user data processed through the chatbot or software tools. Westpoint Capital acts as a data processor, limited to providing hosting, infrastructure, and support. A separate Data Processing Agreement (DPA) may apply where required by law. The Client must ensure that end users are informed of any automated data processing performed by the chatbot.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">11. Consumer Rights for Digital Content</h2>
                    <p className="text-white/80 leading-relaxed">
                      For Clients who qualify as consumers under Estonian law, the following apply: Digital content is delivered immediately after purchase. By completing a purchase, the Client expressly agrees that delivery begins immediately and waives the right to withdrawal under §56(1) of the Estonian Consumer Protection Act, since the product is digital and not returnable. Westpoint Capital will ensure that digital products function as described and will provide reasonable support in case of technical issues.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">12. Compliance Disclaimer</h2>
                    <p className="text-white/80 leading-relaxed">
                      Westpoint Capital will make reasonable efforts to ensure its operations comply with Estonian and EU law. However, the Client is solely responsible for ensuring that their use of the Services complies with any applicable laws in their region, including but not limited to marketing, data protection, and communication regulations.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law & Jurisdiction</h2>
                    <p className="text-white/80 leading-relaxed">
                      This Agreement is governed by the laws of Estonia, including applicable EU legislation. Any disputes shall be subject to the exclusive jurisdiction of the Harju County Court (Harju Maakohus) in Tallinn, Estonia.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">14. Term & Termination</h2>
                    <p className="text-white/80 leading-relaxed">
                      This Agreement remains in effect until terminated by either party. Termination does not relieve the Client of payment obligations or liabilities incurred prior to termination. Upon termination, all rights to use the Services are revoked, and access to digital systems may be disabled.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">15. Acceptance</h2>
                    <p className="text-white/80 leading-relaxed">
                      By using, subscribing to, or accessing any Services provided by Westpoint Capital OÜ, the Client confirms their understanding and acceptance of these Terms & Conditions.
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
