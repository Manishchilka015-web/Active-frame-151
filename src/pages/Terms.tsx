import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-black pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Terms & Conditions</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">1. Services</h2>
              <p>Our agency provides influencer marketing services, including influencer sourcing, campaign management, creator outreach, content coordination, and performance reporting.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">2. Campaign Approval</h2>
              <p>All campaign briefs, influencer selections, content requirements, and deliverables must be approved by the client before campaign execution.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">3. Payment Terms</h2>
              <p className="mb-2">A minimum of 50% advance payment is required before the campaign begins.</p>
              <p className="mb-2">The remaining balance must be paid within the agreed payment period.</p>
              <p>Delayed payments may result in campaign suspension.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">4. Influencer Deliverables</h2>
              <p>Influencers are responsible for creating and publishing content according to the approved campaign brief. Content timelines may vary based on influencer availability.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">5. Revisions</h2>
              <p>Reasonable content revisions may be requested before publication. Excessive revisions or changes to the original brief may incur additional charges.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">6. Cancellation Policy</h2>
              <p className="mb-2">Once influencer bookings are confirmed, cancellation fees may apply.</p>
              <p>Payments made for completed work are non-refundable.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">7. Content Rights</h2>
              <p>Unless otherwise agreed in writing, influencers retain ownership of their content. Usage rights for brands will be specified in the campaign agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">8. Performance Disclaimer</h2>
              <p>While we strive to achieve the best possible results, we do not guarantee specific sales, revenue, engagement, or follower growth outcomes.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">9. Confidentiality</h2>
              <p>Both parties agree to keep confidential any sensitive business information shared during the campaign.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
