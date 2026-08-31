import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VslSection() {
  return (
    <section className="py-[60px] pb-[100px] bg-primary-dark" id="vsl">
      <div className="container max-w-[1180px] mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mesh-dark glass-card-dark rounded-md py-14 px-10 text-center relative overflow-hidden"
        >
          <div className="mb-9">
            <span className="section-eyebrow !text-accent">VIDEO OVERVIEW</span>
            <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] text-white font-display font-bold mb-2.5 leading-tight">
              SEE HOW BOOCLIENTS WORKS
            </h2>
            <p className="text-white/65 text-[1.05rem] max-w-[620px] mx-auto">
              A quick look at how trained people can handle your leads, appointments and follow-ups.
            </p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.01, borderColor: "rgba(255, 77, 46, 0.4)" }}
            className="group w-full max-w-[860px] mx-auto mb-9 bg-[#181818] border border-white/10 min-h-[200px] sm:min-h-0 aspect-[4/3] sm:aspect-video rounded relative flex flex-col items-center justify-center p-4 md:p-8 cursor-pointer transition-all duration-500 shadow-2xl"
          >
            <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-white/10 border border-white/10 text-[0.6rem] md:text-[0.75rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-sm text-white">
              BOOCLIENTS OVERVIEW
            </div>
            
            <div className="w-14 h-14 md:w-[72px] md:h-[72px] shrink-0 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent text-white group-hover:border-accent">
              <Play fill="currentColor" className="w-5 h-5 md:w-7 md:h-7 translate-x-[2px]" />
            </div>

            <h3 className="font-display text-[1.1rem] sm:text-[1.4rem] md:text-[2rem] font-bold leading-[1.25] mb-3 md:mb-6 max-w-[580px] text-white px-2">
              YOUR LEADS ARE ALREADY COMING IN.<br />
              <span className="text-accent">WHO IS FOLLOWING UP?</span>
            </h3>

            <div className="text-[0.65rem] md:text-[0.8rem] font-semibold tracking-[0.05em] text-white/60 uppercase">
              WATCH THE 2-MINUTE EXPLANATION
            </div>
          </motion.div>

          <p className="font-display text-[1.15rem] font-bold tracking-[0.02em] text-white max-w-[600px] mx-auto leading-relaxed">
            YOU FOCUS ON YOUR BUSINESS.<br />
            <span className="text-accent">BOOCLIENTS HANDLES THE FOLLOW-THROUGH.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
