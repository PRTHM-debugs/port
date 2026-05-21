import { motion } from 'framer-motion';
import { ArrowUp, Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={scrollToTop}
          className="p-3 bg-primary rounded-full text-primary-foreground shadow-lg"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{ boxShadow: '0 0 20px hsl(32, 100%, 50%, 0.3)' }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              Pratham<span className="text-gradient">.</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <motion.a
              href="https://linkedin.com/in/pratham-buran"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="https://github.com/PRATHAM-BURAN"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="mailto:prathamb72official@gmail.com"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
            >
              <Mail size={18} />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Pratham Prasad Buran. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
