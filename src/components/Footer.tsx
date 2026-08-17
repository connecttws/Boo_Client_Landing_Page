import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10 mt-auto">
      <div className="container max-w-[1180px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-12 mb-10 gap-10">
          <div className="max-w-[360px]">
            <Link href="/" className="font-display text-[1.7rem] font-extrabold text-white mb-4 inline-block flex items-center gap-1.5">
              BOOCLIENTS<span className="w-2 h-2 bg-accent rounded-full inline-block" />
            </Link>
            <div className="font-display text-[0.95rem] font-bold leading-relaxed text-accent mb-3 tracking-[0.04em]">
              HUMAN-POWERED CLIENT SUPPORT
            </div>
            <p className="text-white/50 text-[0.9rem] leading-relaxed">
              Real people managing your high-value communications.
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-sm text-white/40 uppercase tracking-wider">Company</span>
              <Link href="#services" className="text-[0.9rem] font-semibold text-white/70 hover:text-white transition-colors">Services</Link>
              <Link href="#why-booclients" className="text-[0.9rem] font-semibold text-white/70 hover:text-white transition-colors">Why BOOCLIENTS</Link>
              <Link href="#how-it-works" className="text-[0.9rem] font-semibold text-white/70 hover:text-white transition-colors">How It Works</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-sm text-white/40 uppercase tracking-wider">Connect</span>
              <Link href="#enquire" className="text-[0.9rem] font-semibold text-white/70 hover:text-white transition-colors">Get Started</Link>
              <a href="#" className="text-[0.9rem] font-semibold text-white/70 hover:text-white transition-colors">Support</a>
              <a href="#" className="text-[0.9rem] font-semibold text-white/70 hover:text-white transition-colors">Login</a>
            </div>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[0.8rem] text-white/40 gap-4">
          <div>&copy; {new Date().getFullYear()} BOOCLIENTS. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
