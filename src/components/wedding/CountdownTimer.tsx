import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const WEDDING_DATE = new Date("2025-12-25T08:00:00+07:00").getTime();

const CountdownTimer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(WEDDING_DATE - Date.now(), 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-gradient-gold mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Counting Down
        </motion.h2>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="glass-card rounded-xl p-4 md:p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <motion.span
                className="block font-serif text-3xl md:text-5xl text-primary"
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/40 mt-2 block">
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
