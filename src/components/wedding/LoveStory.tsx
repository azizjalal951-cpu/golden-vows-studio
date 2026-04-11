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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold">Love Story</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-primary/20" />

          <div className="space-y-12">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 }}
              >
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary border border-primary/30 flex items-center justify-center glow-gold">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="flex-1 glass-card rounded-xl p-6">
                  <span className="font-sans text-xs tracking-widest text-primary/70 uppercase">{story.date}</span>
                  <h4 className="font-serif text-xl text-primary mt-1 mb-2">{story.title}</h4>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed">{story.desc}</p>
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
