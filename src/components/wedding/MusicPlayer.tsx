import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

/**
 * Interface untuk Props MusicPlayer.
 * Menggunakan '?' agar 'isOpen' menjadi opsional bagi pemanggil,
 * sehingga menghilangkan error "Property 'isOpen' is missing".
 */
interface MusicPlayerProps {
  isOpen?: boolean;
}

const MusicPlayer = ({ isOpen = false }: MusicPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Logika Autoplay: Jalan otomatis saat undangan terbuka
    if (isOpen && audioRef.current && !playing) {
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setPlaying(true);
        } catch (err) {
          // Browser biasanya memblokir autoplay sebelum user berinteraksi
          console.warn("Autoplay tertunda: Menunggu interaksi pengguna.");
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
        // Pastikan file romantis.mp3 ada di folder public/
        src="/romantis.mp3"
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

            {/* Animasi Riak Gelombang (Pulse) saat musik menyala */}
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