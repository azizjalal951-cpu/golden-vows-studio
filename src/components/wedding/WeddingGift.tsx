import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check, Gift, Heart } from "lucide-react";
import { toast } from "sonner";

const accounts = [
  {
    bank: "Bank Central Asia (BCA)",
    number: "1234567890",
    holder: "Azxxxx",
  },
  {
    bank: "Bank Mandiri",
    number: "0987654321",
    holder: "Nama Pasangan",
  },
];

const GiftCard = ({ account }: { account: typeof accounts[0] }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(account.number);
    setCopied(true);
    toast.success("Nomor rekening tersalin! ✨");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card-premium rounded-3xl p-8 border border-[#D4AF37]/10 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Gift className="w-12 h-12 text-[#D4AF37]" />
      </div>

      <div className="relative z-10 space-y-4">
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C9A961]">
          {account.bank}
        </p>
        
        <div className="space-y-1">
          <h4 className="font-serif text-2xl text-white tracking-wider">
            {account.number}
          </h4>
          <p className="font-sans text-sm text-white/40 italic">
            a.n {account.holder}
          </p>
        </div>

        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-sans text-xs tracking-widest uppercase transition-all duration-500 ${
            copied 
              ? "bg-green-500/20 text-green-400 border border-green-500/30" 
              : "bg-white/5 text-[#C9A961] border border-[#C9A961]/20 hover:bg-[#C9A961] hover:text-[#121212]"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" /> Tersalin
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" /> Salin Rekening
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const WeddingGift = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gift" className="relative py-24 md:py-32 px-6 bg-[#121212]" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#C9A961]/50 mb-4">
            Wedding Gift
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-gradient-gold-strong">Tanda Kasih</h2>
          
          {/* Audit #10: Sopan & Tidak Menuntut */}
          <div className="mt-8 max-w-lg mx-auto">
            <p className="font-sans text-white/50 text-sm md:text-base leading-relaxed">
              Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat memberikannya melalui:
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {accounts.map((acc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.8 }}
            >
              <GiftCard account={acc} />
            </motion.div>
          ))}
        </div>

        {/* Audit #4: Sentuhan Romantis Penutup */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]/20 animate-pulse" />
          <p className="font-serif text-xl text-white/80">Terima Kasih</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingGift;