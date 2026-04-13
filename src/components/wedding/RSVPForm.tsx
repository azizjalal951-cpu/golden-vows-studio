import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2, XCircle, Users } from "lucide-react";
import { supabase } from "@/lib/supabase"; // Pastikan path import benar

interface RSVPData {
  name: string;
  attendance: string;
  guests: number;
  message: string;
}

const RSVPForm = ({ onWishAdded }: { onWishAdded?: (wish: { name: string; message: string; date: string }) => void }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<RSVPData>({
    name: "",
    attendance: "yes",
    guests: 1,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi Dasar
    if (!form.name.trim()) {
      toast.error("Mohon masukkan nama Anda ✨");
      return;
    }

    setLoading(true);

    try {
      // 1. Kirim data ke Tabel 'rsvp' di Supabase
      const { error } = await supabase
        .from('rsvp')
        .insert([
          { 
            name: form.name, 
            attendance: form.attendance, 
            guests: form.attendance === 'yes' ? form.guests : 0, 
            message: form.message 
          }
        ]);

      if (error) throw error;

      // 2. Jika pengiriman berhasil, update UI Wish secara lokal (jika ada pesannya)
      if (form.message.trim() && onWishAdded) {
        onWishAdded({
          name: form.name,
          message: form.message,
          date: "Baru saja",
        });
      }

      // 3. Feedback Berhasil
      toast.success("Terima kasih, konfirmasi Anda telah tersimpan! 💝");
      
      // Reset Form
      setForm({ name: "", attendance: "yes", guests: 1, message: "" });
      
    } catch (error: any) {
      console.error("Error saving RSVP:", error.message);
      toast.error("Gagal mengirim RSVP. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="relative py-24 md:py-32 px-6 bg-[#121212] overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#C9A961]/50 mb-4">
            Be Our Guest
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-gradient-gold-strong">RSVP</h2>
          <p className="mt-6 font-sans text-white/40 text-sm md:text-base italic leading-relaxed">
            Merupakan suatu kehormatan bagi kami atas kehadiran Bapak/Ibu/Saudara/i.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-card-premium rounded-[2.5rem] p-8 md:p-12 border border-[#D4AF37]/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nama */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-[#C9A961]">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-sans text-base text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.08] transition-all"
                placeholder="Contoh: Budi Sudarsono"
              />
            </div>

            {/* Kehadiran */}
            <div className="space-y-3">
              <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#C9A961]">
                Konfirmasi Kehadiran
              </label>
              <div className="flex gap-4">
                {[
                  { id: "yes", label: "Hadir", icon: CheckCircle2 },
                  { id: "no", label: "Berhalangan", icon: XCircle }
                ].map((val) => (
                  <button
                    key={val.id}
                    type="button"
                    onClick={() => setForm({ ...form, attendance: val.id })}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-sans text-sm font-medium transition-all duration-500 ${
                      form.attendance === val.id
                        ? "bg-[#D4AF37] text-[#121212] shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                        : "bg-white/5 border border-white/10 text-white/40 hover:border-[#D4AF37]/30"
                    }`}
                  >
                    <val.icon className="w-4 h-4" />
                    {val.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Jumlah Tamu */}
            {form.attendance === "yes" && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <label className="flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-[#C9A961]">
                  <Users className="w-3 h-3" /> Jumlah Tamu
                </label>
                <div className="relative">
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-sans text-base text-white appearance-none focus:outline-none focus:border-[#D4AF37]/50 transition-all cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n} className="bg-[#1a1a1a] text-white">
                        {n} Orang
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#C9A961] opacity-50">
                    ▼
                  </div>
                </div>
              </motion.div>
            )}

            {/* Pesan */}
            <div className="space-y-3">
              <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#C9A961]">
                Ucapan & Doa Restu
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-sans text-base text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.08] transition-all resize-none"
                placeholder="Tuliskan pesan manis Anda untuk kedua mempelai..."
              />
            </div>

            {/* Tombol Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full btn-luxury relative py-5 flex items-center justify-center gap-3 disabled:opacity-50 transition-all shadow-[0_15px_35px_rgba(212,175,55,0.25)]"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  <span className="font-medium tracking-widest uppercase text-xs">Mengirim...</span>
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span className="font-medium tracking-widest uppercase text-xs">Kirim Konfirmasi</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;