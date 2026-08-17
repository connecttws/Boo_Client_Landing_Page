import { motion } from 'framer-motion';
import { Users, Settings, Repeat } from 'lucide-react';

export default function HumanDifferenceSection() {
  const cards = [
    {
      title: "TRAINED PEOPLE",
      desc: "Empathetic, clear, and proactive team members managing your high-value communications.",
      icon: Users
    },
    {
      title: "YOUR PROCESS",
      desc: "We adopt your specific brand tone, qualifying criteria, and operational guidelines.",
      icon: Settings
    },
    {
      title: "CONSISTENT FOLLOW-UP",
      desc: "Continuous, structured outreach that ensures no interested client is ever overlooked.",
      icon: Repeat
    }
  ];

  return (
    <section className="section-padding bg-primary-dark text-white border-t border-white/5" id="why-booclients">
      <div className="container max-w-[1180px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1"></span>
            NOT AN AI CHATBOT
          </span>
          <h2 className="section-title text-white">
            REAL PEOPLE<br />
            <span className="text-gradient">BEHIND EVERY CONVERSATION</span>
          </h2>
          <p className="section-subtitle text-white/70">
            Our trained team works according to your process, communication style and requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#181818] border border-white/10 p-9 rounded text-left hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <card.icon size={24} strokeWidth={2} />
              </div>
              <h3 className="text-white text-[1.2rem] font-display font-bold mb-2.5">{card.title}</h3>
              <p className="text-white/65 text-[0.92rem] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border border-white/10 bg-white/5 p-6 md:p-8 rounded text-center"
        >
          <h4 className="text-[1.6rem] tracking-[0.06em] text-accent mb-1.5 font-display font-bold">
            HUMAN-IN-THE-LOOP
          </h4>
          <p className="text-white/70 text-[0.95rem]">
            Real accountability and genuine conversations that automated systems simply cannot replicate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
