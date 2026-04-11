import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const stories = [
  { date: "Januari 2020", title: "Pertama Bertemu", desc: "Kami pertama kali bertemu di sebuah acara kampus. Pandangan pertama yang tak terlupakan." },
  { date: "Juni 2020", title: "Mulai Dekat", desc: "Setelah berbulan-bulan saling mengenal, kami mulai menjalin hubungan yang lebih dekat." },
  { date: "Desember 2022", title: "Lamaran", desc: "Di bawah langit malam yang penuh bintang, sebuah pertanyaan sederhana mengubah segalanya." },
  { date: "Desember 2025", title: "Pernikahan", desc: "Hari yang kami tunggu, untuk menyatukan dua hati dalam satu ikatan suci." },
];

const LoveStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" className="section-padding" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/30 mb-4">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold">Love Story</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-primary/15" />

          <div className="space-y-14">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                className={`relative flex items-start gap-6 pl-14 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="hidden md:block flex-1" />
                <div className="absolute left-3 md:relative md:left-auto z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-primary/20 flex items-center justify-center glow-gold">
                    <Heart className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 glass-card rounded-xl p-6">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-primary/60 uppercase">{story.date}</span>
                  <h4 className="font-serif text-lg text-primary mt-1 mb-2">{story.title}</h4>
                  <p className="font-sans text-sm text-foreground/50 leading-relaxed">{story.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
