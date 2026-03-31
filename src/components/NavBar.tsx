import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

const NavBar = () => (
  <motion.nav
    initial={{ y: -150 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 left-0 right-0 z-0 px-6 md:px-8 py-4 flex items-center justify-between bg-background/80 backdrop-blur-xl border-b border-primary/10"
  >
    <div className="font-display text-2xl tracking-widest text-primary">
      Adv<span className="text-white-off">Full</span>
    </div>
    <a
      href="https://wa.me/5511977276044"
      className="flex items-center gap-2 bg-primary hover:bg-gold-light text-primary-foreground font-syne font-bold text-xs tracking-widest uppercase px-5 py-2.5 transition-all hover:-translate-y-0.5 clip-path-nav"
    >
      <MessageSquare className="w-3.5 h-3.5" />
      Falar com especialista
    </a>
  </motion.nav>
);

export default NavBar;
