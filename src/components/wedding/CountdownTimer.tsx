import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const CountdownTimer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // TARGET: 25 April 2026, Jam 08:00 AM
    // Note: Bulan April di JS adalah index 3
    const targetDate = new Date(2026, 3, 25, 8, 0, 0).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A961]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#C9A961]/50 mb-4">
            Menuju Hari Bahagia
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-gradient-gold-strong tracking-widest">
            Menghitung Mundur
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 md:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="glass-card-premium rounded-2xl p-4 md:p-8 flex flex-col items-center justify-center border border-white/5 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <div className="relative h-10 md:h-20 overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={unit.value}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="block font-serif text-3xl md:text-7xl text-[#C9A961] drop-shadow-[0_2px_10px_rgba(201,169,97,0.3)]"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="font-sans text-[8px] md:text-xs tracking-[0.3em] uppercase text-white/40 mt-4 block">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;