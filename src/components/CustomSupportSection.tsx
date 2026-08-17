import { motion } from 'framer-motion';

export default function CustomSupportSection() {
  const tags = [
    "Lead Qualification",
    "Appointment Management",
    "Lead Calling",
    "Lead Reactivation",
    "Follow-ups",
    "Payment Follow-ups"
  ];

  return (
    <section className="section-padding bg-bg-warm">
      <div className="container max-w-[1180px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card py-10 px-5 md:py-14 md:px-12 rounded text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1"></span>
            TAILORED WORKFLOWS
          </span>
          <h2 className="section-title mb-1.5">YOUR BUSINESS IS <span className="text-gradient">DIFFERENT.</span></h2>
          <h3 className="text-[1.4rem] font-display font-bold text-secondary-text mb-4">
            YOUR SUPPORT SHOULD BE TOO.
          </h3>
          <p className="text-[1.05rem] text-secondary-text mb-9">Choose the support you actually need.</p>

          <div className="flex flex-wrap justify-center gap-3 max-w-[760px] mx-auto mb-9">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 77, 46, 0.4)", color: "#FF4D2E", backgroundColor: "rgba(255,255,255,0.8)" }}
                className="bg-white/40 backdrop-blur-sm border border-white py-3 px-5 rounded font-bold text-[0.95rem] transition-colors cursor-default shadow-sm"
              >
                {tag}
              </motion.div>
            ))}
          </div>

          <div className="text-[1.05rem] mb-7">
            <strong className="font-bold">Need something specific?</strong> We can build the support around your workflow.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
