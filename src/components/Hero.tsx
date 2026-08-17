import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { MousePointerClick, UserCheck, PhoneCall, CalendarCheck, TrendingUp } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const headingText = "YOUR LEADS NEED MORE THAN AN AUTOMATED REPLY.";
  
  const typingVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="pt-20 md:pt-32 pb-12 lg:pb-16 overflow-hidden relative">
      <div className="container max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          
          <motion.div 
            className="max-w-[620px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="section-eyebrow">
              HUMAN-POWERED CLIENT SUPPORT
            </motion.span>
            
            <motion.span variants={itemVariants} className="font-display text-[1.15rem] font-extrabold tracking-[0.18em] text-primary-dark mb-5 block">
              BOOCLIENTS
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-[clamp(2.4rem,4.8vw,3.8rem)] leading-[1.08] tracking-[-0.03em] mb-6 text-primary-dark font-display font-bold">
              <motion.span variants={typingVariants} initial="hidden" animate="visible" className="inline-block">
                {headingText.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="text-accent"
              >
                THEY NEED PEOPLE.
              </motion.span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-[1.2rem] text-secondary-text mb-9 leading-relaxed">
              Trained human support for leads, appointments and follow-ups.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4.5 mb-7">
              <Link href="#enquire" className="btn btn-primary w-full sm:w-auto">
                GET STARTED
              </Link>
              <Link href="#vsl" className="btn btn-secondary w-full sm:w-auto">
                WATCH HOW IT WORKS
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="text-[0.82rem] font-bold tracking-[0.08em] uppercase text-primary-dark/70">
              REAL PEOPLE • REAL CONVERSATIONS • REAL FOLLOW-UP
            </motion.div>
          </motion.div>

          {/* HERO WORKFLOW VISUAL */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-300 rounded-lg blur opacity-20 animate-pulse"></div>
            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="glass-card p-5 md:p-8 rounded-md relative shadow-2xl transition-colors duration-500"
            >
              <div className="flex justify-between items-center border-b border-border-subtle pb-5 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(255,77,46,0.6)]"></div>
                  <div className="font-display font-extrabold text-[0.95rem] tracking-[0.05em] uppercase text-primary-dark">Workflow Engine</div>
                </div>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] px-3 py-1 bg-gradient-to-r from-accent to-orange-400 text-white rounded-full shadow-sm">Human Powered</span>
              </div>

              <div className="flex flex-col gap-3.5 relative">
                {[
                  { num: "01", label: "NEW LEAD", meta: "Inbound Web / Ad", isAccent: false, icon: MousePointerClick },
                  { num: "02", label: "QUALIFY", meta: "Trained Team", isAccent: true, avatar: "#FF4D2E", icon: UserCheck },
                  { num: "03", label: "FOLLOW UP", meta: "Direct Call / Chat", isAccent: true, avatar: "#111", icon: PhoneCall },
                  { num: "04", label: "BOOK", meta: "Calendar Synced", isAccent: true, icon: CalendarCheck },
                  { num: "05", label: "NEXT STEP", meta: "Client Pipeline", isAccent: false, icon: TrendingUp },
                ].map((step, i) => (
                  <motion.div 
                    key={step.num}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="flex items-center justify-between p-3.5 bg-white/60 border border-border-subtle rounded-lg hover:border-accent/40 hover:bg-white hover:shadow-md transition-all duration-300 group hover:translate-x-1 cursor-default"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm transition-colors duration-300 ${step.isAccent ? 'bg-accent group-hover:bg-[#e03a1a]' : 'bg-primary-dark group-hover:bg-[#2a2a2a]'}`}>
                        <step.icon size={15} strokeWidth={2.5} />
                      </div>
                      <div className="font-extrabold text-[0.9rem] tracking-[0.02em] text-primary-dark group-hover:text-accent transition-colors">{step.label}</div>
                    </div>
                    <div className="text-[0.7rem] font-bold uppercase tracking-[0.05em] flex items-center gap-1.5 px-2.5 py-1 bg-bg-warm border border-border-subtle rounded-full group-hover:border-accent/20 group-hover:bg-accent/5 group-hover:text-accent transition-all duration-300">
                      {step.avatar && (
                        <span className="w-2.5 h-2.5 rounded-full border border-white shadow-sm" style={{ background: step.avatar }}></span>
                      )}
                      <span>{step.meta}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-dashed border-border-subtle flex justify-between items-center text-[0.75rem] font-bold text-secondary-text">
                <span className="tracking-[0.1em] uppercase">PROCESS + FOLLOW-THROUGH</span>
                <span className="flex items-center gap-1.5 text-accent tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
                  Active
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
