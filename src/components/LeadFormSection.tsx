import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for reaching out to BOOCLIENTS. A dedicated team member will review your requirements and reach out shortly.');
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="section-padding bg-white border-t border-border-subtle" id="enquire">
      <div className="container max-w-[1180px] mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow">DIRECT ENQUIRY</span>
          <h2 className="section-title">LET'S TALK ABOUT YOUR BUSINESS</h2>
          <p className="section-subtitle">Tell us what you need help with.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-[680px] mx-auto bg-bg-warm border border-border-subtle p-8 md:p-12 rounded-md shadow-xl shadow-black/5"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="fullName" className="text-[0.82rem] font-bold tracking-[0.02em] text-primary-dark uppercase">Full Name</label>
                <input type="text" id="fullName" className="w-full p-3.5 bg-white border border-border-subtle rounded font-main text-[0.95rem] text-primary-dark outline-none focus:border-accent transition-colors" placeholder="John Doe" required />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="businessName" className="text-[0.82rem] font-bold tracking-[0.02em] text-primary-dark uppercase">Business Name</label>
                <input type="text" id="businessName" className="w-full p-3.5 bg-white border border-border-subtle rounded font-main text-[0.95rem] text-primary-dark outline-none focus:border-accent transition-colors" placeholder="Company Inc." required />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="phone" className="text-[0.82rem] font-bold tracking-[0.02em] text-primary-dark uppercase">WhatsApp / Phone</label>
                <input type="tel" id="phone" className="w-full p-3.5 bg-white border border-border-subtle rounded font-main text-[0.95rem] text-primary-dark outline-none focus:border-accent transition-colors" placeholder="+1 (555) 000-0000" required />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="email" className="text-[0.82rem] font-bold tracking-[0.02em] text-primary-dark uppercase">Email</label>
                <input type="email" id="email" className="w-full p-3.5 bg-white border border-border-subtle rounded font-main text-[0.95rem] text-primary-dark outline-none focus:border-accent transition-colors" placeholder="john@company.com" required />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="website" className="text-[0.82rem] font-bold tracking-[0.02em] text-primary-dark uppercase">Website</label>
                <input type="url" id="website" className="w-full p-3.5 bg-white border border-border-subtle rounded font-main text-[0.95rem] text-primary-dark outline-none focus:border-accent transition-colors" placeholder="https://company.com" />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="industry" className="text-[0.82rem] font-bold tracking-[0.02em] text-primary-dark uppercase">Industry</label>
                <input type="text" id="industry" className="w-full p-3.5 bg-white border border-border-subtle rounded font-main text-[0.95rem] text-primary-dark outline-none focus:border-accent transition-colors" placeholder="e.g. Real Estate, Services" />
              </div>

              <div className="flex flex-col gap-1.5 text-left md:col-span-2">
                <label htmlFor="monthlyLeads" className="text-[0.82rem] font-bold tracking-[0.02em] text-primary-dark uppercase">Approximate Monthly Leads</label>
                <input type="text" id="monthlyLeads" className="w-full p-3.5 bg-white border border-border-subtle rounded font-main text-[0.95rem] text-primary-dark outline-none focus:border-accent transition-colors" placeholder="e.g. 50-100, 200+" />
              </div>
            </div>

            <div className="text-[0.85rem] font-extrabold tracking-[0.04em] uppercase mb-3.5 text-left text-primary-dark">WHAT DO YOU NEED HELP WITH?</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-6">
              {['Lead Qualification', 'Appointment Management', 'Lead Reactivation', 'Calling', 'Follow-ups', 'Payment Follow-ups', 'Something Else'].map(service => (
                <label key={service} className={`flex items-center gap-2.5 text-[0.9rem] font-semibold text-primary-dark cursor-pointer select-none ${service === 'Something Else' ? 'sm:col-span-2' : ''}`}>
                  <input type="checkbox" name="services" value={service} className="w-[18px] h-[18px] accent-accent cursor-pointer" />
                  <span>{service}</span>
                </label>
              ))}
            </div>

            <div className="flex flex-col gap-1.5 text-left md:col-span-2 mb-7">
              <label htmlFor="requirements" className="text-[0.82rem] font-bold tracking-[0.02em] text-primary-dark uppercase">TELL US A LITTLE ABOUT YOUR REQUIREMENTS</label>
              <textarea id="requirements" className="w-full p-3.5 bg-white border border-border-subtle rounded font-main text-[0.95rem] text-primary-dark outline-none focus:border-accent transition-colors min-h-[100px] resize-y" placeholder="Describe your current lead volume, bottlenecks, and desired workflow..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? 'CONNECTING WITH TEAM...' : 'START THE CONVERSATION'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
