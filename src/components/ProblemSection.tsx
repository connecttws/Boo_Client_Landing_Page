import { motion } from 'framer-motion';

import { UserX, ClockAlert, PhoneOff, DatabaseZap } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      title: "MISSED LEADS",
      desc: "Enquiries come in when your team is busy or after hours, slipping away without engagement.",
      icon: UserX
    },
    {
      title: "SLOW RESPONSES",
      desc: "Delays in initial outreach drastically drop prospect interest and booking intent.",
      icon: ClockAlert
    },
    {
      title: "NO FOLLOW-UP",
      desc: "One contact attempt is not enough. Without systematic persistence, potential clients go cold.",
      icon: PhoneOff
    },
    {
      title: "OLD LEADS",
      desc: "Valuable pipeline databases sit dormant because no one has the capacity to reconnect.",
      icon: DatabaseZap
    }
  ];

  return (
    <section className="section-padding bg-white border-y border-border-subtle relative z-10">
      <div className="container max-w-[1180px] mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1"></span>
            THE BOTTLENECK
          </span>
          <h2 className="section-title">
            WHY <span className="text-gradient">AUTOMATION ALONE</span> IS FAILING YOU.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-11">
          {problems.map((prob, i) => {
            const borderColors = ['border-t-accent', 'border-t-amber-500', 'border-t-rose-500', 'border-t-orange-500'];
            return (
            <motion.div 
              key={prob.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)", borderColor: "rgba(255, 255, 255, 1)" }}
              className={`glass-card p-6 md:p-8 rounded-2xl text-left transition-all duration-300 relative group overflow-hidden border-t-[4px] ${borderColors[i % 4]}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors"></div>
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white text-accent transition-colors duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(255,77,46,0.4)]">
                <prob.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="font-display font-bold text-primary-dark mb-2.5 leading-[1.3] text-[1.2rem]">
                {prob.title}
              </h3>
              <p className="text-[1rem] text-secondary-text leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          )})}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[1.4rem] font-bold text-primary-dark font-display"
        >
          <span className="text-gradient font-extrabold tracking-[0.05em]">BOOCLIENTS</span> helps you handle what happens next.
        </motion.div>
      </div>
    </section>
  );
}
