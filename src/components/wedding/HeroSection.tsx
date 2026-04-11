import { motion } from "framer-motion";
import { useMemo } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import ornament from "@/assets/ornament.png";

interface HeroSectionProps {
  guestName?: string;
  onOpen: () => void;
}

const GoldParticles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${-Math.random() * 20}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.6 + 0.2,
    })), []
  );

  return (
    <div className="gold-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="gold-particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = ({ guestName, onOpen }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Radial gold glow behind title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
      </div>

      {/* Floating gold particles */}
      <GoldParticles />

      <motion.div
        className="relative z-10 text-center px-6 max-w-xl flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {guestName && (
          <motion.p
            className="font-sans text-sm tracking-[0.3em] uppercase text-foreground/50 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Dear, <span className="text-primary font-medium">{guestName}</span>
          </motion.p>
        )}

        <motion.p
          className="font-display text-base md:text-lg tracking-[0.25em] text-foreground/60 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          The Wedding of
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-gradient-gold-strong leading-[1.1] mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Ahmad
          <span className="block text-3xl md:text-4xl lg:text-5xl my-2 text-primary/60">&</span>
          Aisyah
        </motion.h1>

        <motion.img
          src={ornament}
          alt=""
          className="w-28 md:w-36 mx-auto mb-8 opacity-40"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          loading="lazy"
          width={512}
          height={512}
        />

        <motion.p
          className="font-sans text-sm tracking-[0.2em] text-foreground/40 mb-10"
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
