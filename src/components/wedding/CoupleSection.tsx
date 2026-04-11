import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <div className="relative mb-6">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/30 glow-gold">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -inset-3 rounded-full border border-primary/10 animate-pulse_glow" />
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-primary mb-2">{name}</h3>
      <p className="font-sans text-sm text-foreground/60 max-w-xs leading-relaxed">{description}</p>
    </motion.div>
  );
};

const CoupleSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="couple" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-4">
            The Happy Couple
          </h2>
          <img src={ornament} alt="" className="w-24 mx-auto opacity-30" loading="lazy" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <CoupleCard
            image={groomImg}
            name="Ahmad Fauzi"
            description="Putra pertama dari Bapak Hasan & Ibu Fatimah"
            delay={0.2}
          />

          <motion.div
            className="font-serif text-4xl text-primary"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, type: "spring" }}
          >
            &
          </motion.div>

          <CoupleCard
            image={brideImg}
            name="Aisyah Putri"
            description="Putri kedua dari Bapak Ibrahim & Ibu Khadijah"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
