import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

const NavBar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 left-0 right-0 z-50 w-full max-w-full min-w-0 px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between gap-2 sm:gap-4 bg-background/80 backdrop-blur-xl border-b border-primary/10"
  >
    <div className="font-display text-xl sm:text-2xl tracking-widest text-primary shrink-0 min-w-0 truncate">
      Adv<span className="text-white-off">Full</span>
    </div>
    <a
      href="https://wa.me/5511977276044"
      aria-label="Falar com especialista no WhatsApp"
      className="flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap bg-primary hover:bg-gold-light text-primary-foreground font-syne font-bold text-[0.65rem] sm:text-xs tracking-widest uppercase px-3 sm:px-5 py-2 sm:py-2.5 transition-colors clip-path-nav"
    >
      <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden />
      <span className="hidden sm:inline">Falar com especialista</span>
      <span className="sm:hidden">Especialista</span>
    </a>
  </motion.nav>
);

export default NavBar;
