import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const WEDDING_DATE = new Date("2025-12-25T08:00:00+07:00").getTime();

const CountdownTimer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
    /* Menambahkan py-24 untuk memberi ruang napas di mobile */
    <section className="relative py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-serif text-3xl md:text-5xl text-gradient-gold-strong mb-16 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Counting Down
        </motion.h2>

        {/* Gap diperlebar agar tidak terlihat sesak */}
        <div className="grid grid-cols-4 gap-2 md:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              /* Menggunakan glass-card-premium agar lebih transparan sesuai request sebelumnya */
              className="glass-card-premium rounded-2xl p-3 md:p-8 flex flex-col items-center justify-center border border-white/5"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <motion.span
                className="block font-serif text-2xl md:text-6xl text-primary drop-shadow-sm"
                key={unit.value}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              <span className="font-sans text-[8px] md:text-sm tracking-[0.3em] uppercase text-white/40 mt-3 block">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Ornament tambahan di bawah agar transisi ke section berikutnya lebih halus */}
        <motion.div 
          className="mt-16 opacity-20 w-16 mx-auto h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: 0 }}
          animate={inView ? { width: 64 } : {}}
          transition={{ delay: 1, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default CountdownTimer;