import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="bg-primary-dark text-white text-center border-b border-white/10 py-24">
      <div className="container max-w-[1180px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[780px] mx-auto"
        >
          <h2 className="font-display text-[clamp(2rem,3.8vw,3rem)] font-bold text-white mb-5 leading-tight">
            STOP LOSING LEADS TO SILENCE
          </h2>
          
          <div className="flex justify-center gap-3 flex-wrap mb-6">
            <span className="text-[0.95rem] font-semibold text-white/80 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded">
              Respond Faster
            </span>
            <span className="text-[0.95rem] font-semibold text-white/80 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded">
              Follow Up Longer
            </span>
            <span className="text-[0.95rem] font-semibold text-white/80 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded">
              Book More Clients
            </span>
          </div>

          <p className="text-white/65 text-[1.1rem] mb-9">
            Let our trained team handle your leads, appointments, and follow-ups. Focus on your business, not your inbox.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Link href="/contact" className="btn btn-primary px-10 py-4 text-lg">
              GET STARTED TODAY
            </Link>
            <span className="text-[0.82rem] text-white/50">
              No long-term contracts. Start seeing results immediately.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
