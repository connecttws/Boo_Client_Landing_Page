import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why BOOCLIENTS', href: '#why-booclients' },
  { label: 'Who We Help', href: '#who-we-help' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          
          let currentActive = '';
          for (const link of navLinks) {
            const id = link.href.substring(1);
            const element = document.getElementById(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150 && rect.bottom >= 150) {
                currentActive = id;
              }
            }
          }
          setActiveSection(currentActive);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F7F6F2]/90 backdrop-blur-md shadow-sm border-b border-border-subtle py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container max-w-[1180px] mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight text-primary-dark flex items-center gap-1.5">
          BOOCLIENTS<span className="w-2 h-2 bg-accent rounded-full inline-block" />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          <ul className="flex items-center gap-9 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  className={`text-[0.9rem] font-semibold transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? 'text-accent' 
                      : 'text-primary-dark hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#enquire" className="btn btn-primary px-6 py-3 text-sm">
            GET STARTED
          </Link>
        </div>

        <button
          className="md:hidden text-primary-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-warm border-b border-border-subtle p-6 flex flex-col gap-6 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-display text-2xl font-bold ${
                  activeSection === link.href.substring(1) ? 'text-accent' : 'text-primary-dark'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#enquire"
              className="btn btn-primary mt-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              GET STARTED
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
