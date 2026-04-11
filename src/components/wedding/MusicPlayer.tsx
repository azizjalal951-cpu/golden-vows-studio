import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

const MusicPlayer = ({ isOpen }: { isOpen: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isOpen && audioRef.current && !playing) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
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
        preload="none"
        src="https://cdn.pixabay.com/audio/2024/11/29/audio_d4e4e15e38.mp3"
      />
      {isOpen && (
        <motion.button
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card-premium flex items-center justify-center border border-primary/20"
          onClick={toggle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(43 76% 52% / 0.3)" }}
          whileTap={{ scale: 0.9 }}
          title={playing ? "Mute" : "Play music"}
        >
          {playing ? (
            <Music className="w-5 h-5 text-primary animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-foreground/50" />
          )}
        </motion.button>
      )}
    </>
  );
};

export default MusicPlayer;
