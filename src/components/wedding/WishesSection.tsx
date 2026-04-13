import { motion, useInView } from "framer-motion";
<<<<<<< HEAD
import { useRef, useEffect, useState } from "react";
import { MessageCircle, Quote } from "lucide-react";
import { supabase } from "@/lib/supabase";
=======
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf

export interface Wish {
  name: string;
  message: string;
  date: string;
}

<<<<<<< HEAD
const WishesSection = ({ wishes: localWishes }: { wishes: Wish[] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [dbWishes, setDbWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari Supabase saat komponen dimuat
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const { data, error } = await supabase
          .from('rsvp')
          .select('name, message, created_at')
          .neq('message', '') // Hanya ambil yang ada pesannya
          .eq('is_visible', true)
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data) {
          const formattedWishes = data.map((item: any) => ({
            name: item.name,
            message: item.message,
            date: new Date(item.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
          }));
          setDbWishes(formattedWishes);
        }
      } catch (err) {
        console.error("Gagal mengambil ucapan:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, [localWishes]); // Refresh jika ada wishlist baru yang ditambahkan dari form

  // Gabungkan ucapan dari database dan ucapan lokal yang baru dikirim
  const allWishes = [...localWishes, ...dbWishes];

  return (
    <section id="wishes" className="relative py-24 md:py-32 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#C9A961]/50 mb-4">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-gradient-gold-strong">Doa & Harapan</h2>
        </motion.div>

        <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
          {loading && allWishes.length === 0 ? (
            <div className="text-center py-10 text-white/20 font-sans italic">
              Memuat ucapan...
            </div>
          ) : allWishes.length === 0 ? (
            <div className="text-center py-10 text-white/20 font-sans italic">
              Belum ada ucapan. Jadilah yang pertama memberikan doa! ✨
            </div>
          ) : (
            allWishes.map((wish, i) => (
              <motion.div
                key={`${wish.name}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card-premium rounded-[1.5rem] p-6 md:p-8 border border-white/5 relative group hover:border-[#D4AF37]/20 transition-all"
              >
                <Quote className="absolute top-6 right-8 w-8 h-8 text-[#C9A961]/10 group-hover:text-[#C9A961]/20 transition-colors" />
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/10">
                    <MessageCircle className="w-5 h-5 text-[#C9A961]" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                      <h4 className="font-serif text-lg text-[#C9A961] leading-none">{wish.name}</h4>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-white/20">
                        • {wish.date}
                      </span>
                    </div>
                    <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed italic">
                      "{wish.message}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Style kustom untuk scrollbar agar lebih elegan */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(201, 169, 97, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 169, 97, 0.4);
        }
      `}</style>
=======
const defaultWishes: Wish[] = [
  { name: "Budi Santoso", message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin 🤲", date: "20 Desember 2025" },
  { name: "Siti Rahayu", message: "Barakallahu lakuma wa baraka 'alaikuma. Semoga selalu bahagia! 💕", date: "19 Desember 2025" },
  { name: "Rizky Pratama", message: "Happy wedding! Semoga langgeng sampai Jannah. Aamiin ya Rabb 🌸", date: "18 Desember 2025" },
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
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
    </section>
  );
};

<<<<<<< HEAD
export default WishesSection;
=======
export default WishesSection;
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
