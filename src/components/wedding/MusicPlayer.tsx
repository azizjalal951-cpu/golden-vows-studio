import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

/**
 * Interface untuk Props MusicPlayer.
 */
interface MusicPlayerProps {
  isOpen?: boolean;
}

const MusicPlayer = ({ isOpen = false }: MusicPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Memutar audio otomatis hanya jika tombol "Buka Undangan" sudah diklik (isOpen === true)
    if (isOpen && audioRef.current && !playing) {
      const playAudio = async () => {
        try {
          // Delay singkat 500ms agar transisi visual selesai dulu baru musik masuk
          setTimeout(async () => {
            if (audioRef.current) {
              await audioRef.current.play();
              setPlaying(true);
            }
          }, 500);
        } catch (err) {
          // Warning ini wajar jika browser masih memblokir karena dianggap kurang interaksi
          console.warn("Autoplay tertunda: Menunggu interaksi pengguna lebih lanjut.");
        }
      };
      playAudio();
    }
  }, [isOpen]);

  const toggle = () => {
    if (!audioRef.current) return;
    
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.error("Gagal memutar audio:", e));
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        /* MENGGUNAKAN BASE_URL:
           Otomatis mengarah ke / saat di localhost
           Otomatis mengarah ke /golden-vows-studio/ saat di GitHub Pages
        */
        src={`${import.meta.env.BASE_URL}romantis.mp3`}
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.button
            className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center border border-[#D4AF37]/30 backdrop-blur-md shadow-2xl"
            style={{ 
              background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0.7) 100%)",
            }}
            onClick={toggle}
            initial={{ scale: 0, opacity: 0, x: 30 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 30 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(212,175,55,0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            {playing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Music className="w-5 h-5 text-[#D4AF37]" />
              </motion.div>
            ) : (
              <VolumeX className="w-5 h-5 text-white/40" />
            )}

            {/* Efek riak gelombang emas saat musik menyala */}
            {playing && (
              <motion.div
                className="absolute inset-0 rounded-full border border-[#D4AF37]/40"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;