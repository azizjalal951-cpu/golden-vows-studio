import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import ornament from "@/assets/ornament.png";

interface HeroSectionProps {
  guestName?: string;
  onOpen: () => void;
}

const HeroSection = ({ guestName, onOpen }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {guestName && (
          <motion.p
            className="font-sans text-sm tracking-[0.3em] uppercase text-foreground/60 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Dear, <span className="text-primary">{guestName}</span>
          </motion.p>
        )}

        <motion.p
          className="font-display text-lg md:text-xl tracking-[0.2em] text-foreground/70 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          The Wedding of
        </motion.p>

        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-gradient-gold leading-tight mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Ahmad & Aisyah
        </motion.h1>

        <motion.img
          src={ornament}
          alt="ornament"
          className="w-32 md:w-40 mx-auto mb-6 opacity-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 1.2 }}
          loading="lazy"
          width={512}
          height={512}
        />

        <motion.p
          className="font-sans text-sm tracking-[0.15em] text-foreground/50 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          25 . 12 . 2025
        </motion.p>

        <motion.button
          className="btn-luxury"
          onClick={onOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open Invitation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
