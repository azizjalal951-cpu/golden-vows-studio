import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const stories = [
  { 
    date: "Januari 2020", 
    title: "Pertama Bertemu", 
    desc: "Kami pertama kali bertemu di sebuah acara kampus. Sebuah awal sederhana yang ternyata menjadi babak baru dalam hidup kami." 
  },
  { 
    date: "Juni 2020", 
    title: "Mulai Dekat", 
    desc: "Setelah berbulan-bulan saling mengenal, kami mulai menemukan banyak kesamaan dan memutuskan untuk melangkah bersama." 
  },
  { 
    date: "Desember 2022", 
    title: "Momen Lamaran", 
    desc: "Di bawah saksi keluarga dan sahabat, sebuah janji diucapkan untuk mengukuhkan komitmen kami ke jenjang yang lebih serius." 
  },
  { 
    date: "Desember 2025", 
    title: "Hari Pernikahan", 
    desc: "Hari yang kami tunggu untuk menyatukan dua hati dalam satu ikatan suci yang diberkahi selamanya." 
  },
];

const LoveStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="story" className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#121212]" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#C9A961]/50 mb-4">
            Our Journey
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-gradient-gold-strong leading-tight">
            Love Story
          </h2>
        </motion.div>

        <div className="relative">
          {/* Garis Tengah Timeline */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-transparent via-[#C9A961]/30 to-transparent" />

          <div className="space-y-16 md:space-y-28">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.3, duration: 0.8 }}
              >
                {/* Sisi Kosong untuk Desktop agar Zig-zag */}
                <div className="hidden md:block flex-1" />

                {/* Dot Tengah (Ikon Hati) */}
                <div className="absolute left-0 md:relative md:left-auto z-20 flex-shrink-0 w-8 h-8 md:mx-12">
                  <div className="w-8 h-8 rounded-full bg-[#121212] border border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-4 ring-[#121212]">
                    <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]/20" />
                  </div>
                </div>

                {/* Kartu Cerita */}
                <div className="flex-1 ml-10 md:ml-0">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="glass-card-premium rounded-2xl p-7 md:p-10 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500 group"
                  >
                    <span className="inline-block font-sans text-[11px] md:text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-semibold mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      {story.date}
                    </span>
                    
                    <h4 className="font-serif text-2xl md:text-3xl text-white mb-4 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                      {story.title}
                    </h4>
                    
                    <p className="font-sans text-[15px] md:text-[17px] text-white/60 leading-relaxed font-light">
                      {story.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Atmosfer Romantis (Subtle Background Glows) */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default LoveStory;