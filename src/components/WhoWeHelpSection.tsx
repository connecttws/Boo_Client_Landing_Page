import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeartPulse, Dumbbell, Briefcase, GraduationCap, Home, Megaphone, Store, Building } from 'lucide-react';

export default function WhoWeHelpSection() {
  const industries = [
    { name: "Healthcare", icon: HeartPulse },
    { name: "Fitness & Wellness", icon: Dumbbell },
    { name: "Professional Services", icon: Briefcase },
    { name: "Education", icon: GraduationCap },
    { name: "Real Estate", icon: Home },
    { name: "Agencies", icon: Megaphone },
    { name: "Local Businesses", icon: Store },
    { name: "B2B", icon: Building }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="section-padding bg-bg-warm" id="who-we-help">
      <div className="container max-w-[1180px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1"></span>
            VERSATILE EXECUTION
          </span>
          <h2 className="section-title">BUILT FOR BUSINESSES THAT <span className="text-gradient">DEAL WITH PEOPLE</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
          {industries.map((ind, i) => (
            <motion.div 
              key={ind.name} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, type: "spring", stiffness: 80, delay: i * 0.05 }}
              className="glass-card p-6 md:p-8 rounded flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl -mr-10 -mb-10 group-hover:bg-accent/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-full bg-white border border-border-subtle shadow-sm flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 z-10">
                <ind.icon size={22} strokeWidth={2} />
              </div>
              <span className="font-bold font-display text-[1.15rem] md:text-[1.2rem] text-primary-dark group-hover:text-accent transition-colors z-10 tracking-[0.02em]">{ind.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[1rem] text-secondary-text font-semibold"
        >
          Don't see your industry? 
          <Link href="/contact" className="text-accent font-extrabold ml-1.5 tracking-[0.02em] hover:underline">
            LET'S TALK
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
