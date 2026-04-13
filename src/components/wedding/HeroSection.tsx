import { motion } from "framer-motion";
import { useMemo } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import ornament from "@/assets/ornament.png";

interface HeroSectionProps {
  guestName?: string;
  onOpen: () => void;
}

<<<<<<< HEAD
// Komponen Animasi Bunga Berjatuhan (Slow Motion)
const FlowerFall = () => {
  const petals = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 8 + 6 + "px",
      duration: Math.random() * 15 + 10 + "s", // Slow motion
      delay: Math.random() * 10 + "s",
    })), []
  );

  return (
    <>
      {petals.map((p) => (
        <div
          key={p.id}
          className="flower-petal" // <--- Ini harus sama dengan class di index.css
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
};

// Komponen Debu Emas (Tetap dipertahankan untuk kedalaman visual)
const GoldParticles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${-Math.random() * 20}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
=======
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
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
    })), []
  );

  return (
<<<<<<< HEAD
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-primary rounded-full"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: p.opacity }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            filter: "blur(0.5px)",
            boxShadow: "0 0 8px #D4AF37",
=======
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
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = ({ guestName, onOpen }: HeroSectionProps) => {
  return (
<<<<<<< HEAD
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 1. Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />
      
      {/* 2. Overlays */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      
      {/* 3. Visual Effects (Flower & Gold) */}
      <GoldParticles />
      <FlowerFall />

      {/* 4. Content Container */}
      <motion.div
        className="relative z-30 text-center px-6 max-w-2xl flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Nama Tamu */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-6 md:mb-10"
          >
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-white/40 mb-2">Special Guest</p>
            <h2 className="text-xl md:text-2xl font-serif text-primary italic capitalize drop-shadow-lg">
              {guestName}
            </h2>
          </motion.div>
        )}

        <motion.p
          className="font-sans text-xs tracking-[0.4em] uppercase text-primary/70 mb-4 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
=======
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
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
        >
          The Wedding of
        </motion.p>

<<<<<<< HEAD
        {/* Nama Pengantin */}
        <motion.div
          className="mb-6 md:mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          <h1 className="font-serif text-6xl md:text-8xl text-gradient-gold-strong py-2 leading-tight">
            Ahmad
          </h1>
          <div className="flex items-center justify-center gap-4 my-2 opacity-50">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="font-serif text-3xl md:text-4xl text-primary">&</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl text-gradient-gold-strong py-2 leading-tight">
            Aisyah
          </h1>
        </motion.div>

        {/* Ornament */}
        <motion.img
          src={ornament}
          alt=""
          className="w-20 md:w-32 mx-auto mb-8 opacity-60 brightness-125"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 0.6, rotate: 0 }}
          transition={{ delay: 1.8, duration: 1.2 }}
        />

        <motion.p
          className="font-sans text-sm tracking-[0.3em] text-white/50 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          14 . 04 . 2026
        </motion.p>

        {/* Tombol Utama */}
        <motion.button
          className="btn-luxury group relative overflow-hidden"
          onClick={onOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Open Invitation</span>
          {/* Efek Kilau Button */}
          <motion.div 
            className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-[-150%]"
            animate={{ translateX: ["-150%", "150%"] }} 
            transition={{ repeat: Infinity, duration: 3, delay: 2.5 }}
          />
=======
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
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
        </motion.button>
      </motion.div>
    </section>
  );
};

<<<<<<< HEAD
export default HeroSection;
=======
export default HeroSection;
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
