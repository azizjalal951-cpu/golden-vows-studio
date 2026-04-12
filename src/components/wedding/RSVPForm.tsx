import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface RSVPData {
  name: string;
  attendance: string;
  guests: number;
  message: string;
}

const RSVPForm = ({ onWishAdded }: { onWishAdded?: (wish: { name: string; message: string; date: string }) => void }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<RSVPData>({
    name: "",
    attendance: "yes",
    guests: 1,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    setLoading(true);

    // Simulate saving (ready for Supabase integration)
    await new Promise((r) => setTimeout(r, 1000));

    if (form.message.trim() && onWishAdded) {
      onWishAdded({
        name: form.name,
        message: form.message,
        date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      });
    }

    toast.success("Thank you for your RSVP! 💝");
    setForm({ name: "", attendance: "yes", guests: 1, message: "" });
    setLoading(false);
  };

  return (
    <section id="rsvp" className="section-padding" ref={ref}>
      <div className="max-w-xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
            Be Our Guest
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold">RSVP</h2>
        </motion.div>

        <motion.form
          className="glass-card rounded-xl p-8 space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div>
            <label className="block font-sans text-xs tracking-widest uppercase text-foreground/50 mb-2">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-sans text-sm text-foreground/80 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
              placeholder="Your name"
              maxLength={100}
            />
          </div>

          <div>
            <label className="block font-sans text-xs tracking-widest uppercase text-foreground/50 mb-2">
              Attendance
            </label>
            <div className="flex gap-3">
              {["yes", "no"].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setForm({ ...form, attendance: val })}
                  className={`flex-1 py-3 rounded-lg font-sans text-sm transition-all ${
                    form.attendance === val
                      ? "bg-primary/20 border border-primary/50 text-primary"
                      : "bg-secondary/30 border border-border text-foreground/50 hover:border-primary/30"
                  }`}
                >
                  {val === "yes" ? "✓ Hadir" : "✗ Tidak Hadir"}
                </button>
              ))}
            </div>
          </div>

          {form.attendance === "yes" && (
            <div>
              <label className="block font-sans text-xs tracking-widest uppercase text-foreground/50 mb-2">
                Number of Guests
              </label>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-sans text-sm text-foreground/80 focus:outline-none focus:border-primary/50 transition-colors"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block font-sans text-xs tracking-widest uppercase text-foreground/50 mb-2">
              Message / Wishes
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-sans text-sm text-foreground/80 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
              placeholder="Write your wishes for the couple..."
              maxLength={500}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {loading ? "Sending..." : "Send RSVP"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPForm;
