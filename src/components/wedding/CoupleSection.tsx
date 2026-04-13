import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import groomImg from "@/assets/groom.jpg";
import brideImg from "@/assets/bride.jpg";
import ornament from "@/assets/ornament.png";

const CoupleCard = ({
  image,
  name,
  description,
  delay,
}: {
  image: string;
  name: string;
  description: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative mb-8">
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border border-[#C9A961]/20 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -inset-3 rounded-full border border-[#D4AF37]/10 animate-pulse" />
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-[#D4AF37] mb-3">{name}</h3>
      <p className="font-sans text-sm text-white/50 max-w-[260px] leading-relaxed italic">
        {description}
      </p>
    </motion.div>
  );
};

const CoupleSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="couple" className="relative py-20 md:py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-[#C9A961]/40 mb-4">
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-gradient-gold-strong mb-6">
            The Happy Couple
          </h2>
          <img src={ornament} alt="" className="w-20 mx-auto opacity-20 pointer-events-none select-none" loading="lazy" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          <CoupleCard
            image={groomImg}
            name="Ahmad Fauzi"
            description="Putra pertama dari Bapak Hasan & Ibu Fatimah"
            delay={0.2}
          />

          <motion.div
            className="font-serif text-5xl text-[#D4AF37]/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            &
          </motion.div>

          <CoupleCard
            image={brideImg}
            name="Aisyah Putri"
            description="Putri kedua dari Bapak Ibrahim & Ibu Khadijah"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;