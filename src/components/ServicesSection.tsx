import { motion } from 'framer-motion';
import Link from 'next/link';
import { UserCheck, CalendarCheck, RotateCcw, Headset, CreditCard } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "LEAD QUALIFICATION",
      checks: ["Respond", "Qualify", "Filter", "Book"],
      icon: UserCheck
    },
    {
      num: "02",
      title: "APPOINTMENT MANAGEMENT",
      checks: ["Confirm", "Remind", "Reschedule"],
      icon: CalendarCheck
    },
    {
      num: "03",
      title: "LEAD REACTIVATION",
      checks: ["Call", "Reconnect", "Filter"],
      icon: RotateCcw
    },
    {
      num: "04",
      title: "FOLLOW-UP SUPPORT",
      checks: ["Follow up", "Update", "Keep moving"],
      icon: Headset
    },
    {
      num: "05",
      title: "PAYMENT FOLLOW-UP",
      checks: ["Remind", "Follow up", "Update"],
      icon: CreditCard
    }
  ];

  return (
    <section className="section-padding bg-bg-warm" id="services">
      <div className="container max-w-[1180px] mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1"></span>
            OUR CORE SERVICES
          </span>
          <h2 className="section-title">WE HANDLE THE <span className="text-gradient">FOLLOW-THROUGH</span></h2>
          <p className="section-subtitle">
            You focus on the business. We handle the conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {services.map((service, i) => {
            const borderColors = ['border-t-accent', 'border-t-amber-500', 'border-t-rose-500', 'border-t-orange-500', 'border-t-[#111111]'];
            return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, type: "spring", stiffness: 120, damping: 15 }}
              whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 1)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
              className={`glass-card p-6 md:p-8 rounded-2xl flex flex-col transition-all duration-300 relative group overflow-hidden border-t-[4px] ${borderColors[i % 5]}`}
            >
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl -mr-20 -mb-20 group-hover:bg-accent/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6 z-10 relative">
                <div className="w-12 h-12 rounded-xl bg-white border border-border-subtle shadow-sm flex items-center justify-center text-primary-dark group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,77,46,0.3)]">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="text-[2.5rem] font-display font-extrabold text-black/5 leading-none select-none group-hover:text-accent/10 transition-colors">
                  {service.num}
                </div>
              </div>
              
              <h3 className="font-display font-bold text-primary-dark mb-3 text-[1.25rem] leading-[1.3] z-10 relative">
                {service.title}
              </h3>
              <ul className="list-none flex flex-col gap-2.5 mt-auto border-t border-border-subtle pt-4 z-10 relative">
                {service.checks.map(check => (
                  <li key={check} className="text-[0.95rem] font-bold tracking-wide text-secondary-text flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent"></span> {check}
                  </li>
                ))}
              </ul>
            </motion.div>
          )})}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/contact" className="btn btn-primary">
            EXPLORE HOW WE CAN HELP
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
