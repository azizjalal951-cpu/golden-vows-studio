import { motion, AnimatePresence } from "framer-motion";
import ornament from "@/assets/ornament.png";

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen = ({ isVisible }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={ornament}
            alt=""
            className="w-20 h-20 mb-8 opacity-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5, rotate: 360 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.p
            className="font-serif text-lg tracking-[0.4em] text-primary/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Loading
          </motion.p>
          <motion.div
            className="mt-6 h-px bg-primary/20 rounded-full overflow-hidden w-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="h-full bg-primary/60 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
