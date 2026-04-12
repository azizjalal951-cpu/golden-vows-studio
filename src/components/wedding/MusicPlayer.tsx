import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

const MusicPlayer = ({ isOpen }: { isOpen: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Saat undangan dibuka, coba putar musik otomatis
    if (isOpen && audioRef.current) {
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch((err) => console.log("Autoplay blocked or failed:", err));
    }
  }, [isOpen]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        // Ubah preload ke "auto" agar musik siap saat tombol diklik
        preload="auto" 
        // Ganti URL ini dengan file .mp3 romantis pilihan Anda di folder public
        src="/romantis.mp3"
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.button
            className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center border border-primary/30 backdrop-blur-md shadow-2xl"
            // Tambahkan background gradient tipis agar terlihat premium
            style={{ 
              background: "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(0,0,0,0.6) 100%)",
            }}
            onClick={toggle}
            initial={{ scale: 0, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 50 }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 0 25px rgba(212,175,55,0.4)" 
            }}
            whileTap={{ scale: 0.9 }}
          >
            {playing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Music className="w-5 h-5 text-primary" />
              </motion.div>
            ) : (
              <VolumeX className="w-5 h-5 text-white/50" />
            )}

            {/* Efek Lingkaran Pulse saat musik menyala */}
            {playing && (
              <motion.div
                className="absolute inset-0 rounded-full border border-primary"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.6, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;