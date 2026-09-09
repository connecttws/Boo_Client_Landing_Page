import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Clock, 
  MessageSquare, 
  CalendarCheck, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles,
  Users2
} from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ThankYouPage() {
  // Fire Facebook Pixel Lead Event upon landing on Thank You page
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    },
  };

  const featurePillars = [
    {
      icon: MessageSquare,
      title: "Fast Response",
      desc: "Instant engagement with new inbound enquiries so opportunities never go cold.",
      tag: "Zero Delay"
    },
    {
      icon: CalendarCheck,
      title: "Appointment Management",
      desc: "Coordinating schedules, sending confirmations, and ensuring warm handoffs.",
      tag: "High Show-up Rate"
    },
    {
      icon: PhoneCall,
      title: "Relentless Follow-up",
      desc: "Multi-touch, thoughtful human follow-through until leads take the next step.",
      tag: "Real People"
    },
  ];

  return (
    <>
      <Head>
        <title>Thank You | BOOCLIENTS</title>
        <meta
          name="description"
          content="Your enquiry has been received. Our team will review your requirements and get in touch shortly."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section className="relative overflow-hidden pt-6 pb-20 md:pt-10 md:pb-28">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-orange-400/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="container max-w-[1080px] mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            {/* Top Confirmation Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent font-main text-[0.8rem] font-extrabold tracking-[0.14em] uppercase shadow-[0_0_20px_rgba(255,77,46,0.18)]">
                <Sparkles size={14} className="animate-spin" style={{ animationDuration: "4s" }} />
                <span>THANK YOU!</span>
              </div>
            </motion.div>

            {/* Main Status / Icon */}
            <motion.div 
              variants={itemVariants}
              className="relative my-2 inline-flex items-center justify-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/10 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-75" style={{ animationDuration: "3s" }} />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-accent to-orange-500 flex items-center justify-center text-white shadow-xl shadow-accent/30">
                  <CheckCircle2 size={40} className="stroke-[2.5]" />
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold text-primary-dark tracking-[-0.02em] leading-[1.1] mt-4 mb-4"
            >
              YOUR ENQUIRY HAS BEEN RECEIVED.
            </motion.h1>

            {/* Salutation & Confirmation Text */}
            <motion.div
              variants={itemVariants}
              className="max-w-[760px] mx-auto text-[1.1rem] md:text-[1.2rem] text-secondary-text leading-relaxed space-y-3"
            >
              <p className="font-semibold text-primary-dark">
                Thank you for reaching out to <span className="text-accent font-extrabold">BOOCLIENTS</span>.
              </p>
              <p>
                We’ve successfully received your details. Our team will review your requirements and get in touch with you shortly to understand your business and how we can support your lead management and follow-up process.
              </p>
            </motion.div>

            {/* Quick Status / Timeline Pill */}
            <motion.div
              variants={itemVariants}
              className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-white border border-border-subtle shadow-sm text-[0.82rem] font-bold text-primary-dark uppercase tracking-wider"
            >
              <span className="flex items-center gap-1.5 text-accent">
                <Clock size={15} /> Expected Contact:
              </span>
              <span className="text-primary-dark/80">Within A Few Hours</span>
              <span className="text-border-subtle hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-emerald-600">
                <ShieldCheck size={16} /> Direct Specialist Assigned
              </span>
            </motion.div>

            {/* Core Value Section: LET'S MAKE SURE NO LEAD GETS LEFT BEHIND */}
            <motion.div
              variants={itemVariants}
              className="w-full mt-14 pt-12 border-t border-border-subtle"
            >
              <div className="glass-card p-7 md:p-12 rounded-2xl relative overflow-hidden text-left shadow-xl shadow-black/5">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/15 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-[840px] mx-auto text-center mb-10">
                  <span className="section-eyebrow mb-3">OUR CORE COMMITMENT</span>
                  <h2 className="font-display text-[clamp(1.6rem,3.8vw,2.5rem)] font-extrabold text-primary-dark tracking-[-0.01em] uppercase leading-tight mb-4">
                    LET’S MAKE SURE NO LEAD GETS LEFT BEHIND.
                  </h2>
                  <p className="text-[1.05rem] md:text-[1.15rem] text-secondary-text leading-relaxed">
                    From responding to new enquiries to managing appointments and following up with potential clients, <span className="font-bold text-primary-dark">BOOCLIENTS</span> helps you stay on top of every opportunity.
                  </p>
                  <p className="text-[0.98rem] md:text-[1.05rem] text-secondary-text leading-relaxed mt-2.5">
                    Our trained team works around your process to handle the conversations and follow-through for your business needs.
                  </p>
                </div>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {featurePillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white/80 hover:bg-white border border-border-subtle hover:border-accent/30 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between group"
                      >
                        <div>
                          <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                            <Icon size={24} />
                          </div>
                          <h3 className="font-display text-[1.1rem] font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="text-[0.9rem] text-secondary-text leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-[0.75rem] font-bold text-primary-dark/60 uppercase tracking-wider">
                          <span>{pillar.tag}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* High-Impact Statement Banner (Dark Mesh) */}
            <motion.div
              variants={itemVariants}
              className="w-full mt-10 rounded-2xl mesh-dark p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 flex flex-col items-center text-center max-w-[780px] mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-accent font-main text-[0.75rem] font-extrabold tracking-[0.14em] uppercase mb-4">
                  <Users2 size={13} />
                  <span>REAL PEOPLE • REAL CONVERSATIONS • REAL FOLLOW-UP</span>
                </div>

                <h3 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold leading-tight tracking-tight uppercase mb-3">
                  YOU FOCUS ON YOUR BUSINESS.
                </h3>
                <h4 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold leading-tight tracking-tight uppercase text-accent mb-6">
                  WE HANDLE THE FOLLOW-THROUGH.
                </h4>

                <p className="text-white/70 text-[0.95rem] md:text-[1.05rem] leading-relaxed max-w-[620px] mb-8">
                  While you work on closing deals and delivering great service to your clients, our team makes sure every incoming inquiry is nurtured with human care.
                </p>

                {/* Back to Website CTA Button */}
                <Link
                  href="/"
                  className="btn btn-primary px-9 py-4 text-[1rem] flex items-center gap-3 shadow-lg shadow-accent/25 hover:shadow-accent/40"
                >
                  <ArrowLeft size={19} className="transition-transform group-hover:-translate-x-1" />
                  <span>BACK TO WEBSITE</span>
                </Link>
              </div>
            </motion.div>

            {/* Bottom Support Contact Note */}
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center text-[0.85rem] text-secondary-text"
            >
              <p>
                Have an urgent inquiry? Feel free to email us directly at{" "}
                <a
                  href="mailto:contact@booclients.com"
                  className="font-bold text-primary-dark underline hover:text-accent transition-colors"
                >
                  contact@booclients.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
