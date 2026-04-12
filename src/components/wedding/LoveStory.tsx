import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const stories = [
  { date: "Januari 2026", title: "Pertama Bertemu", desc: "Kami pertama kali bertemu di sebuah acara kampus. Pandangan pertama yang tak terlupakan." },
  { date: "Juni 2026", title: "Mulai Dekat", desc: "Setelah berbulan-bulan saling mengenal, kami mulai menjalin hubungan yang lebih dekat." },
  { date: "November 2026", title: "Lamaran", desc: "Di bawah langit malam yang penuh bintang, sebuah pertanyaan sederhana mengubah segalanya." },
  { date: "Desember 2026", title: "Pernikahan", desc: "Hari yang kami tunggu, untuk menyatukan dua hati dalam satu ikatan suci." },
];

const LoveStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    /* Menambahkan py-24 agar tidak menempel dengan section atas/bawah */
    <section id="story" className="relative py-24 md:py-32 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-white/30 mb-4">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-gradient-gold-strong">Love Story</h2>
        </motion.div>

        <div className="relative">
          {/* Garis Tengah Timeline - Dibuat lebih halus */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

          <div className="space-y-12 md:space-y-20">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                /* Flex direction diatur agar zig-zag di desktop, namun konsisten di mobile */
                className={`relative flex items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
              >
                {/* Sisi Kosong untuk Desktop */}
                <div className="hidden md:block flex-1" />

                {/* Dot Tengah (Ikon Hati) */}
                <div className="absolute left-0 md:relative md:left-auto z-10 flex-shrink-0 w-8 h-8 md:mx-8">
                  <div className="w-8 h-8 rounded-full bg-black border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <Heart className="w-3 h-3 text-primary fill-primary/20" />
                  </div>
                </div>

                {/* Kartu Cerita */}
                <div className="flex-1 ml-10 md:ml-0">
                  <div className="glass-card-premium rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors duration-500">
                    <span className="font-sans text-[9px] tracking-[0.3em] text-primary/70 uppercase font-medium">
                      {story.date}
                    </span>
                    <h4 className="font-serif text-xl text-primary mt-2 mb-3 tracking-wide">
                      {story.title}
                    </h4>
                    <p className="font-sans text-sm text-white/50 leading-relaxed text-pretty">
                      {story.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dekorasi Cahaya Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default LoveStory;