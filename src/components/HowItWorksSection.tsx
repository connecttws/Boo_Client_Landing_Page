import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    { num: "01", title: "TELL US WHAT YOU NEED" },
    { num: "02", title: "WE UNDERSTAND YOUR PROCESS" },
    { num: "03", title: "WE TRAIN THE TEAM" },
    { num: "04", title: "BOOCLIENTS GETS TO WORK" }
  ];

  return (
    <section className="section-padding bg-white border-y border-border-subtle relative z-10" id="how-it-works">
      <div className="container max-w-[1180px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1"></span>
            THE ONBOARDING
          </span>
          <h2 className="section-title">SIMPLE FOR YOU. <span className="text-gradient">STRUCTURED FOR US.</span></h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 mb-14 relative z-10">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex-1 flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                className="glass-card p-6 md:p-8 rounded flex-1 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300 relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(255,77,46,0.5)] transition-all duration-300">
                  <span className="font-display text-[1.4rem] font-extrabold text-accent group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-[1.25rem] leading-[1.35] font-bold text-primary-dark font-display">
                  {step.title}
                </h3>
              </motion.div>
              
              {/* Desktop Arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-[18px] w-9 h-9 -translate-y-1/2 z-20 items-center justify-center bg-white rounded-full shadow-lg border border-border-subtle text-accent/50">
                  <ArrowRight size={20} />
                </div>
              )}
              
              {/* Mobile Arrow */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex items-center justify-center my-1 text-accent/30 z-20">
                  <ChevronDown size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center font-display text-[1.25rem] font-bold text-primary-dark"
        >
          YOU FOCUS ON YOUR BUSINESS. <span className="text-accent">WE HANDLE THE FOLLOW-THROUGH.</span>
        </motion.div>
      </div>
    </section>
  );
}
