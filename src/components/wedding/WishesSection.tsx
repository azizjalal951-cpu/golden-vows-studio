import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

export interface Wish {
  name: string;
  message: string;
  date: string;
}

const defaultWishes: Wish[] = [
  { name: "Budi Santoso", message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin 🤲", date: "20 Desember 2026" },
  { name: "Siti Rahayu", message: "Barakallahu lakuma wa baraka 'alaikuma. Semoga selalu bahagia! 💕", date: "19 Desember 2026" },
  { name: "Rizky Pratama", message: "Happy wedding! Semoga langgeng sampai Jannah. Aamiin ya Rabb 🌸", date: "18 Desember 2026" },
];

const WishesSection = ({ wishes }: { wishes: Wish[] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const allWishes = [...wishes, ...defaultWishes];

  return (
    <section id="wishes" className="section-padding" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold">Ucapan</h2>
        </motion.div>

        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {allWishes.map((wish, i) => (
            <motion.div
              key={`${wish.name}-${i}`}
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-primary">{wish.name}</h4>
                  <p className="font-sans text-xs text-foreground/40 mb-2">{wish.date}</p>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed">{wish.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
